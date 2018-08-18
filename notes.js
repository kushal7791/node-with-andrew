//console.log('Starting notes.js');

//console.log('module');
const fs = require('fs');

var fetchNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));//every time it completely over writes the file.
};

var addNote = (title, body) => {
    //console.log('Adding note : ', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });
    //or
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    if (note) {
        debugger;
        console.log("-*-");
        console.log("Note created/found.");
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
        console.log("-***-");
    } else {
        console.log(`Note not taken/found.`);
    }
};

// module.exports.age = 25;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// };

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

// module.exports.add = (a, b) => {
//     return a + b;
// };