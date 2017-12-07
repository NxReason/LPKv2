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

export function getPositionString(position) {
  return `position: absolute; top: ${position.y || 0}px; left: ${position.x || 0}px;`;
}

export function getSizeString(size) {
  return `width: ${size.w || 0}px; height: ${size.h || 0}px;`;
}

export function getStyleString({ position, size }) {
  return `${getPositionString(position)} ${getSizeString(size)}`;
}
