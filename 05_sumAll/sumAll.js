const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) ||
                      num1 < 0 || num2 < 0                ){
        return 'ERROR';}
    
    if (num1 > num2)
        num2 = [num1, num1 = num2][0];      //Swap num1 and num2 if num1 > num2

    let sum = 0;
    for (let i=num1; i<=num2; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
