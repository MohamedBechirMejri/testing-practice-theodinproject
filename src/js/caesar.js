const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const caesar = (string) => {
  const str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    str[i] = alphabet.charAt(alphabet.indexOf(str[i]) + 1);
  }

  return str.join('');
};

export default caesar;
