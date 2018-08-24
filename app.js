//console.log('Starting App.js');

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

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOption = {
    describe: 'Title of note the note is must !',
    demand: true,//validation like title is necessary
    alias: 't'
};

const bodyOption = {
    describe: 'Body of the note is must !',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add a new note......', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all notes......')
    .command('read', 'Read a note........', {
        title: titleOption
    })
    .command('remove', 'Remove a note....', {
        title: titleOption
    })
    .help()
    .argv;
//var command = process.argv[2];
var command = argv._[0];
//console.log('Command :', command);
//console.log('Process :', process.argv);
//console.log('Yargs :', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    //if else called so return will be undefined.
    notes.logNote(note);
} else if(command === 'list') {
    var allNotes = notes.getAll();//notes file k andar se export kia hua getall function call kro
    console.log(`Printing ${allNotes.length} note(s)....`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    notes.logNote(note);
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);//if length not equal so return true means removed.
    var message = noteRemoved ? 'note was removed.' : 'Note note found';
    console.log(message);
} else {
    console.log('Nothing to display');
}

//console.log('File Executed : ', argv.$0);