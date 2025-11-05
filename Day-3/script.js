/*Question-1 Print Right-Angled Star Triangle

Input: Rows = 5

Output:

*
**
***
****
*****
*/

/*
const row = 5
for(let i = 1; i <= 5; i++){
    let str = ''
    for(let j = 1; j <= i; j++){
        str = str + "*"
    }
 console.log(str)
}
 */

/* Question-2 Print Inverted Right-Angled Triangle

Input: Rows = 5

Output:

*****
****
***
**
*     */

let rows = 5;
for(let i=rows; i>=1; i--){
   let str = "";
   for(let j=i; j>=1; j--){
    str = str + "*"
   }
   console.log(str)
}

