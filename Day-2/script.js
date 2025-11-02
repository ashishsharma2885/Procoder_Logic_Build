/*Question-1 Find the Maximum of Three Numbers

Input: 10 20 5
Output: 20
*/

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