/* Question 1 - Print Number from 1 to N
input 5
output 1 2 3 4 5 

const num = 5;
for(let i = 1; i<=num; i++){
    console.log(i)
}
*/

/* take a user input in question - 1

const num = prompt("Enter a user number")
for(let i = 0; i<=num; i++){
    console.log(i)
}
    */

/* Question-2 Print Numbers from N to 1 without changing the loop condition of above question
Input: 5
Output: 5 4 3 2 1 


const num = 100;
for(let i=0; i<=num; i++){
    console.log(num - i + 1)
}
*/

/* Question-3 Print All Even Numbers from 1 to N

Input: 10
Output: 2 4 6 8 10
✨ Introduces conditional checks inside loops. */

const num = 10;
for(let i = 0; i<=num; i++){
    if (i % 2 === 0){
         console.log(i)
    }
}

