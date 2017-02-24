module.exports = (r, g, b) => {
  let red = r;
  let green = g
  let blue = b;

  if (typeof red === 'string') {
    const arr = red.match(/\d+/g).map(Number);
    [red, green, blue] = arr;
  }

  if (!isValidCoordinate(red) ||
    !isValidCoordinate(green) ||
    !isValidCoordinate(blue)) {
    throw new TypeError('Expected three numbers below 256.');
  }

  return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
}

function isValidCoordinate(n) {
  return typeof n === 'number' &&
    isFinite(n) &&
    Math.floor(n) === n &&
    n <= 255;
}
