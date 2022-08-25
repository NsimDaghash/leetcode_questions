var searchInsert = function(nums, target) {
    /*
    let n= nums.length-1;
    for(let i = 0; i < n; i++)
      
        // If K is found
        if (nums[i] == target)
            return i;
  
        // If current array element
        // exceeds K
        else if (nums[i] > target)
            return i;
    
    // If all elements are smaller
    // than K
    return n;
        // Lower and upper bounds
        */
    let k=0, i=0 ;
    while (nums[i] < target )
        {
            k++;
            i++;
        }
    return k;
};

let nums = [1,3,5,6], target = -1 ;
//let s = "abcdefg", k = 2 ;
console.log(searchInsert(nums,target));