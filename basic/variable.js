const accountId=12345
let accountEmail="vinod@google.com"
var accountPassword="1111"
let accountState;
accountcity='jaipur'

/*
prefer not use to var 
bcz of issue in block space and function space
*/

accountEmail='hello'
accountPassword='2222'
accountcity='bhopal'
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountcity,accountPassword,accountState])

