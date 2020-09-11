const _ = require("lodash");

const frequencyCalculator = require("../frequency/frequency-calculator");

/**
 * Search for exact matches of just the local part of an email address
 *    ie: <local-part>@<domain>
 * @param {*} people
 */
module.exports.localPartEmail = (originalPeople) => {
  // deep copy to preserve original array
  var people = JSON.parse(JSON.stringify(originalPeople));
  var duplicates = [];

  // set a local_email field on each person
  people.forEach((person) => {
    var localEmail = person.email_address
      .trim()
      .slice(0, person.email_address.indexOf("@"));
    person.local_email = localEmail;
  });

  // create sets of local email duplicates
  people.forEach((p1) => {
    people.forEach((p2) => {
      if (!_.isEqual(p1, p2)) {
        if (p1.local_email === p2.local_email) {
          if (!isArrayInArray(duplicates, [p1, p2])) {
            duplicates.push([p1, p2]);
          }
        }
      }
    });
  });

  return duplicates;
};
/**
 * Compare letter frequency between 2 email addresses.
 * Only test pairs of email addresses that have lengths within 2 characters
 *
 * Returns a list of possible duplicate pairs with a variation of 15%
 * @param {*} people
 */
module.exports.frequency = (originalPeople) => {
  // deep copy to preserve original array
  var people = JSON.parse(JSON.stringify(originalPeople));

  const variationThreshold = 0.15;
  var duplicates = [];

  people.forEach((person) => {
    person.frequency = frequencyCalculator.multiple([person.email_address]);
  });

  people.forEach((p1) => {
    people.forEach((p2) => {
      if (!_.isEqual(p1, p2)) {
        // only consider strings that are within 2 characters
        if (Math.abs(p1.email_address.length - p2.email_address.length) < 3) {
          var variationPercentage = compareFrequency(p1, p2);
          if (variationPercentage < variationThreshold) {
            if (!isArrayInArray(duplicates, [p1, p2, variationPercentage])) {
              duplicates.push([p1, p2, variationPercentage]);
            }
          }
        }
      }
    });
  });

  return duplicates;
};

/**
 * Count mismatched letters based on differences in character frequency between person1 and person2
 * Steps:
 *    1 - Count differences in letter frequency for letters that person1 and person2 share
 *        ^ (absolute value so it counts both ways)
 *    2 - Count number of letters person1 has that person2 doesnt
 *    3 - Count number of letters person2 has that person1 doesnt
 *
 * Return total number of misses divided by the average lengths of the email addresses to
 *  give an estimate of the letter variation between the email_addresses
 *
 * @param {*} person1
 * @param {*} person2
 */
function compareFrequency(person1, person2) {
  var length =
    (person1.email_address.length + person2.email_address.length) / 2;
  var frequency1 = person1.frequency;
  var frequency2 = person2.frequency;
  var misses = 0;

  Object.keys(frequency1).forEach((key1) => {
    if (frequency2[key1]) {
      // step 1 (details above)
      misses += Math.abs(frequency1[key1] - frequency2[key1]);
    } else {
      // step 2 (details above)
      misses += frequency1[key1];
    }
  });

  Object.keys(frequency2).forEach((key1) => {
    if (!frequency1[key1]) {
      // step 3 (details above)
      misses += frequency2[key1];
    }
  });

  return misses / length;
}

function isArrayInArray(arr, item) {
  // reverse order of first 2 elements manually to preserve third element in the frequency comparison response
  var itemReversed = [...item];
  itemReversed[0] = item[1];
  itemReversed[1] = item[0];

  var itemAsString = JSON.stringify(item);
  var itemReversedAsString = JSON.stringify(itemReversed);

  var contains = arr.some((element) => {
    return (
      JSON.stringify(element) === itemAsString ||
      JSON.stringify(element) === itemReversedAsString
    );
  });
  return contains;
}
