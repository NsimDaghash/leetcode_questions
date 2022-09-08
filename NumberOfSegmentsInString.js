/*

434. Number of Segments in a String

Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
*/

/*
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) { 
    let count = 0
    s=s.trim()
    if (s === "" )
        return 0
    else{
        s =s.split(" ")
        for( let i=0;i<s.length;i++){         
            if (s !== "" ){
                count = count +1
            }
        }
        return (count)
    }    
};