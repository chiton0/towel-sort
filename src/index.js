
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(typeof matrix === 'undefined') return [];
  matrix.forEach((item, index) => {
    arr.push(...(index % 2 == 0 ? item : item.reverse()));
  })
  return arr;
}
