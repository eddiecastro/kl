function single(emailAddress) {
  var characterMap = {};
  [...emailAddress].map((letter) => {
    characterMap[letter] ? characterMap[letter]++ : (characterMap[letter] = 1);
  });
  return characterMap;
}

module.exports.single = single;

module.exports.multiple = (emailAddresses) => {
  var characterMap = {};
  emailAddresses.map((address) => {
    const tempCharacterMap = single(address);
    for (const letter of Object.keys(tempCharacterMap)) {
      characterMap[letter]
        ? (characterMap[letter] =
            characterMap[letter] + tempCharacterMap[letter])
        : (characterMap[letter] = tempCharacterMap[letter]);
    }
  });
  return characterMap;
};
