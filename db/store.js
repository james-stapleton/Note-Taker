class Store {
constructor (id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
}
read () {
    // returns db.json object
    return readFileAsync('db/db.json', 'utf8');
}
write() {
return writeFileAsync('db/db.json', JSON.stringify(note));
}

getNotes() {
    return read().then((notes) => {
        parsedNotes = JSON.parse(notes);
    });
}
addNotes() {
    // you need to save title, text, 
    const { title, text} = note
        if (!title || !text) {
            console.log("Please fill out both fields");
        } 
    // add notes to db.json

    // create varaible to hold our new note with the new given id
    const userNote = {title, text, id} 

    // grab all notes and new notes and update notes to return the new note : use spread operator (...notes, userNote)
    const allNotes = [...notes, userNote];

}

deleteNotes() {

//optional
}
}

module.export = Store;