const string = 'Atwau is calling';
const reverseEntireSentence = reverseSeparator(string, '');
const reverseEachWord = reverseSeparator(reverseEntireSentence, ' ');

function reverseSeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

export default reverseEachWord;
