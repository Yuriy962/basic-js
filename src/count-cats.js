const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
    let count = 0;
    if (matrix.length === 0) {
      return 0;
    } else {
      matrix.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          if (item[i] === "^^") {
            count++;
          }
        }
      });
      return count;
    }
  
}

module.exports = {
  countCats
};
