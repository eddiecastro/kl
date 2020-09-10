/**
 * Sort an object with character frequency from highest to lowest count returning an array
 * @param {object} frequency object containing frequency of characters
 */
module.exports.sort = (frequency) => {
  const sorted = [];
  if (Object.keys(frequency).length) {
    // create array of all key->value properties
    Object.keys(frequency).forEach((key) => {
      sorted.push([key, frequency[key]]);
    });

    // sort by value desc
    sorted.sort((a, b) => {
      return b[1] - a[1];
    });
  }

  return sorted;
};
