
let heightChecker = function(heights) {
    let result = 0 ;
    let expected = [] ;
    for (let i=0 ; i< heights.length ; i++){
        expected.push(heights[i])
    }
    expected.sort((a,b) => a-b);
    for (let i=0 ; i< heights.length ; i++){
        if (heights[i] !== expected[i]){
            result++;
        }
    }    
    return result;
};

let  heights = [1,1,4,2,1,3];
console.log(heightChecker(heights));