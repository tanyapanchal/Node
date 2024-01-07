
const os =require("os")
// console.log(os)

//* info about current user
const user = os.userInfo();
console.log(user);

console.log(`system uptime is : ${os.uptime()} seconds`);
console.log(`OS name:${os.type()}`)
console.log(`OS release: ${os.release()}`);
console.log(`OS totalMem: ${os.totalmem()}`);
console.log('Os freeMem: ${os.freemem()}');