const accountId = 720
let accountEmail = "ranjan@gmail.com"
var accountPassword = "12345"
accountcity = "mumbai"

// accountId = 2 // not allowed

accountEmail = "ranjan45@gmail.com"
accountPassword = "43215"
accountcity = "bhubaneswar"
let accountState ;


console.log(accountId);
/* prefer not  to use var
bcz of issue in block scope and functional scope  */
console.table([accountId, accountEmail, accountPassword, accountcity ,accountState]);