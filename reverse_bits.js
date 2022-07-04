

let reverseBits = function(n) {
    let arr = n.toString(2).split("").reverse()
    while(arr.length <32){ arr.push('0')}
    return parseInt(arr.join(""),2);
};

let n = 00000010100101000001111010011100;
console.log(reverseBits(n));