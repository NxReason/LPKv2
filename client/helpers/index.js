/* eslint-disable import/prefer-default-export */

/**
 * Transform array of objects to object with given key
 * @param {Array} arr - initial array of objects for mapping
 * @param {String} key - property of every object in array which will become new object key
 */
export function arrToMap(arr, key) {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
}

// Strings
export function leftPad(val, len, ch = '0') {
  let result = val.toString();

  while (result.length < len) {
    result = ch + result;
  }

  return result;
}

// CSS
export function getPositionString(position) {
  return `position: absolute; top: ${position.y || 0}px; left: ${position.x || 0}px;`;
}

export function getSizeString(size) {
  return `width: ${size.w || 0}px; height: ${size.h || 0}px;`;
}

export function getStyleString({ position, size }) {
  return `${getPositionString(position)} ${getSizeString(size)}`;
}

// Dates
export function getCurrentTimeString() {
  const d = new Date();
  const hours = leftPad(d.getHours(), 2, '0');
  const mins = leftPad(d.getMinutes(), 2, '0');
  const seconds = leftPad(d.getSeconds(), 2, '0');
  return `${hours}:${mins}:${seconds}`;
}

// Arrays
export function _uniqueInFirstArr(fst, snd) {
  const result = [];
  let lastFound = 0;

  fst.forEach((fstEl) => {
    const currFound = snd.indexOf(fstEl, lastFound);

    if (currFound < 0) { result.push(fstEl); }
    else { lastFound = currFound + 1; }
  });

  return result;
}

export function getArraysDiff(fst, snd) {
  const fstSorted = fst.slice().sort();
  const sndSorted = snd.slice().sort();

  const result = {};
  result.first = _uniqueInFirstArr(fstSorted, sndSorted);
  result.second = _uniqueInFirstArr(sndSorted, fstSorted);
  return result;
}
