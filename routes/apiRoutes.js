//require router and store
const router = require("router");
const store = require("Store");

//get route to all notes from DB
router.get('/notes', (request, response) => {
    store
    .getNotes()
    .then((notes) => response.json(notes));
});

//post route to add the notes
router.post('/notes', (request, response) => {
    store
    .addNote(request.body) //anytime user takes input and puts to database, use request.body
    .then((note) => res.json(note));
});

//delete route to delete notes
router.delete('/notes', (req, res) => {
    store
    .deleteNotes(req.body)
    //! .then(()) 
});

//export my module
module.exports = router;