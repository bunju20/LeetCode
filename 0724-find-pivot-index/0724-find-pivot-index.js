/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length == 1)return 0;
  let lSum = 0;
  let rSum = 0;
  rSum = nums.reduce((acc,cur)=>acc+cur);
  for(let i = 0; i < nums.length; i++){
    rSum -= nums[i];
    if(lSum == rSum)return i;
    lSum += nums[i];
  }
  return -1;

};