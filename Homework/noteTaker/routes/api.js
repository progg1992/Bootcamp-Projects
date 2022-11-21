// Dependencies
const fs = require("fs");
const db = require("../db/db.json")
// Gives new note an unique id when saved
const { v4: uuidv4 } = require('uuid');

// Exports API Routes
module.exports = (app) => {

// Retrieves data from the database
    app.get("/api/notes", (req, res) => {
        res.send(db);
    });

// Creates and add new notes
    app.post("/api/notes", (req, res) => {
        let newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text

        };
        db.push(newNote);
        res.send(newNote);
    });
// Deletes notes
    app.delete("/api/notes/:id", (req, res) => {
        
        let noteID = req.params.id

        for (let i = 0; i < db.length; i++) {
            if(db[i].id === noteID) {
                let objIndex = db.indexOf(db);
                db.splice(objIndex,1);
            }
        res.send(db);
    }
});
};