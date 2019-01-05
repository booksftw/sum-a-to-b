
function sum(fromN, toN) {
    // Sum all the values from fromN up to toN 
    if (fromN > toN) {
      // base case
          // run as much times until this is satisfied
          // When this case is satisfied it will return this value to the last recursive case
      return 2
  } else {
      // recursive case
          // each time add by function value
          // For the recursive function the value is +1
          // For the base case it's the return value
      return fromN + sum(fromN + 1, toN)
  }
}

module.exports = sum;