/**
 * Increments individual letter counts for a given string
 * @param {*} emailAddress
 */
function single(emailAddress) {
  var characterMap = {};
  [...emailAddress].map((letter) => {
    characterMap[letter] ? characterMap[letter]++ : (characterMap[letter] = 1);
  });
  return characterMap;
}

/**
 * Increment individual letter counts for an array of strings
 * @param {*} emailAddresses
 */
module.exports.multiple = (emailAddresses) => {
  return single(emailAddresses.join(""));
};
