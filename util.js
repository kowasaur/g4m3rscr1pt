function hasExtension(file, extension) {
  if (!file) return false;
  if (file.split(".").pop() === extension) return true;
  else return false;
}

/**
 * @param {string} str
 * @param {[string, string][]} characters replacee, replacer
 * @returns {string}
 */
function replaceStringCharacters(str, characters) {
  characters.forEach(pair => (str = str.replace(new RegExp(pair[0], "g"), pair[1])));
  return str;
}

module.exports = {
  hasExtension,
  replaceStringCharacters,
};
