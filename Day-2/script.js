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

/*
function positiveOrNegative(num){
    if(num > 0){
        return "Positive"
    } else if(num < 0){
        return "Negative"
    }
    return "Zero"
}
console.log(positiveOrNegative(-6))
*/

/* Question-3 Calculate Electricity Bill
Input: Units = 230

Output: Total Bill = ₹1500
*/

 function calculateElectricityBill(unit){
    let total = 0
  if(unit <= 100){
    total = unit * 5
  } else if(unit <= 200){
    total = (100 * 5) + (unit - 100) * 7
  } else if(unit <= 300){
      total = (100 * 5) + (100 * 7) + (unit - 200) * 10
  } else {
     total = (100 * 5) + (100 * 7) + (100 * 10) (unit - 300) * 12
  }
  return total;
}

console.log(calculateElectricityBill(230))