
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN 
  if (fromN > toN) {
      // base case
      return 0
  } else {
      // recursive case
      return fromN + sum(fromN + 1, toN)
  }
}

module.exports = sum;