/*Built-in module fs syntax*/
const fs = require('fs');

fs.readFile('./demo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

/*Built-in module path syntax*/
const path = require('path');
console.log(path.extname('index.js'));
console.log(path.basename('index.js'));
console.log(path.dirname('index.js'));

/*Built-in module http syntax*/
const http = require('http');

const server = http.createServer((req, res) => {            /*req include urls,header,body*/
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*Built-in module promises syntax*/
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
      resolve('Success');
  }
  else {
      reject('Failure');
  }
});
promise.then((value) => {
  console.log(value);
});
/*explore Built-in module crypto syntax*/


/*Callback function in node */
function home(){
  console.log('Home');
}
function person(home,Callback){
  console.log('Person:' +home);
  Callback();
}
person('nikhila', home);

