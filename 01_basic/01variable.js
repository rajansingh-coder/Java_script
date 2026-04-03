const account_Id = 123
let account_Email = "rajan@email.com"
var account_Password = "456"
account_city = "Gorakhpur"
let account_state;


// account_Id=89  // not  allowed because we cannot change the value  of const further 

account_Email = "kartikeya@account_Email.com"
account_Password = "56"
account_city = "Kushinagar"

console.log(account_Id);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([account_Email, account_Id, account_Password, account_city, account_state])
