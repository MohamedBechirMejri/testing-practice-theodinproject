const caesar = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let a;

  const str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-unused-expressions
    str[i] === str[i].toLowerCase() ? (a = alphabet) : (a = ALPHABET);
    str[i] = a.charAt(a.indexOf(str[i]) + 1);
  }

  return str.join('');
};

export default caesar;
