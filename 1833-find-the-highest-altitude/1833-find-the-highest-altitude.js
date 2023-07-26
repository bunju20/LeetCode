/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0

  for (let i = 0; i < gain.length; i++) {
    if (i === 0) {
      max = Math.max(max, 0 + gain[i]);
    } else {
      gain[i] = gain[i - 1] + gain[i];
      max = Math.max(max, gain[i]);
    }
  }
  return max;
};
