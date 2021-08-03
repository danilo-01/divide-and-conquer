function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

/* Find the index of first zero 
l = low
m = mid
h = hight
*/

const findFirst = (arr, l=0, h=arr.length-1) => {
    if (h >= l) {
        let m = l + Math.floor((h - l) / 2)
        if ((m === 0 || arr[m - 1] === 1) && arr[m] === 0) {
          return m;
        } else if (arr[m] === 1) {
          return findFirst(arr, m + 1, h)
        }
        return findFirst(arr, l, m - 1)
      }
      return -1;
}


module.exports = countZeroes