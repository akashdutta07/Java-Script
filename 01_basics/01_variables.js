const accountID = 144553
// there r 2 ways of declaring variables, leta nd var
//  but let is mostly used.
let accountEmail = "akd.mail"
var accountPass = "12345"
accountCity = "Raipur"

// accountID = 2 // this change is not allowed
accountEmail = "akash.mail"
accountPass = "54321"
accountCity = "Bhilai"

console.log(accountID);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPass, accountCity]);