const caesar = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let a;

  const str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (!/[a-zA-Z]/gi.test(str[i])) {
      continue;
    }
    str[i] === str[i].toLowerCase() ? (a = alphabet) : (a = ALPHABET);
    str[i] = a.charAt((a.indexOf(str[i]) + 1) % 26);
  }

  return str.join('');
};

export default caesar;
