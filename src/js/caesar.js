const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let a;

const checkCase = (char) => (char === char.toLowerCase() ? alphabet : ALPHABET);

const replaceLetter = array => {
  const str = array;
  for (let i = 0; i < str.length; i += 1) {
    a = checkCase(str[i]);
    if (/[a-z]/i.test(str[i])) str[i] = a.charAt((a.indexOf(str[i]) + 1) % 26);
  }
  return str;
};

const caesar = (string) => replaceLetter(string.split('')).join('');

export default caesar;
