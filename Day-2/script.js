/*Question-1 Find the Maximum of Three Numbers

Input: 10 20 5
Output: 20
*/

/*
function maxOfThree(a, b, c){
    let max;
    if(a >= b && a >= c){
    max = a;
    } else if (b >= a && b >= c){
        max = b;
    } else {
        max = c
    }
    return max
}
console.log(maxOfThree(6, 6, 5))
*/

/* Question-2 Check if a Number is Positive, Negative, or Zero

Input: -9
Output: Negative */

function positiveOrNegative(num){
    if(num > 0){
        return "Positive"
    } else if(num < 0){
        return "Negative"
    }
    return "Zero"
}
console.log(positiveOrNegative(-6))