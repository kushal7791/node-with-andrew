// const os = require('os');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
//var filteredArray = _.uniq(['Mke', 1, 'kush', 2, 2, 3]);
//console.log(filteredArray);

//var res = notes.addNote();
//console.log(res);
//var user = os.userInfo();

//fs.appendFile('greetings.txt', `Hello ${user.username} ! and the age ${notes.age}`, function(err){//for node v6
//fs.appendFile('greetings.txt', 'Hello '+ user.username +' and Your age '+ notes.age +' !', function(err){
//    if(err){
//        console.log('Unable to write to file');
//    }
//});

//console.log('Result :', notes.add(9, -2));

console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];
console.log('Command :', command);
console.log(process.argv);

if(command === 'add') {
    console.log('adding new note');
} else if(command === 'list') {
    console.log('Listing all note');
} else {
    console.log('Nothing to display');
}