let similars = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log("i :",i , nums[i]);
    let sum = nums[i];
    let j = i;
      while (nums[i] === nums[j+1]) {
        console.log("while loop : ", nums[j+1]);
        sum += nums[j];
        console.log(sum);
        j++;
      }
      //j--;
      console.log("i  j : ", i, j);
      if (j > i) {
        nums[i] = sum;
        nums.splice(i + 1, j );
        console.log(nums);
      }
      else{
        nums[i] = nums[i]
      }

    
  }
  return nums;
};

let nums = [2, 2, 2, 1, 3, 4, 4, 5, 4, 4, 1, 1, 1, 2];
console.log(similars(nums));
