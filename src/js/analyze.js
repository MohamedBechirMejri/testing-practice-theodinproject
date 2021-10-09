const analyze = (array) => {
  array.sort((a, b) => a - b); // ?
  return {
    average: array[Math.floor(array.length / 2)], // ?
    min: array[0], // ?
    max: array[array.length - 1], // ?
    length: array.length, // ?
  };
};
export default analyze;

// ? is for Wallaby.js
