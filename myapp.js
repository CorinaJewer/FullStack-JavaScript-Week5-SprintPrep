global.DEBUG = true;

const fs = require ("fs");
//const myArgs = process.argv;
const myArgs = process.argv.slice(2);

if (DEBUG) 
if (myArgs.length >= 1) 
    console.log("The my app.args are: ", myArgs);
