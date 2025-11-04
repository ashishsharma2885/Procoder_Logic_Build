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

/*
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
*/

/* Question-4 Check if a Character is a Vowel or Consonant

Input: e
Output: Vowel
*/

/* apporach -1
function checkVowel(char) {
  const charLowercase = char.toLowerCase();
  if (
    charLowercase === "a" ||
    charLowercase === "e" ||
    charLowercase === "i" ||
    charLowercase === "o" ||
    charLowercase === "u"
  ) {
    return "Vowel";
  } else {
    return "Consonant";
  }
}
console.log(checkVowel("A"));
*/

/* Apporach-2
function checkVowel(char = '0'){
    if('aeiou'.includes(char.toLowerCase()) && char !== ''){
        return "Vowel"
    } else if (/[a-z]/.test(char.toLowerCase())) {
        return "Constant"
    }
    return "Not a valid alphabet"
}
console.log(checkVowel("A"))
*/

/* Question- 5 Check if a Year is a Leap Year

Input: 2024
Output: Leap Year
*/

function isLeapYear(year){
    if(year % 400 === 0){
        return true
    } else if (year % 100 === 0){
        return false
    } else if(year % 4 === 0) {
        return true
    }
    return false
}
console.log(isLeapYear(1900))