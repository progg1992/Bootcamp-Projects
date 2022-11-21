// Dependencies
const path = require("path");

module.exports = (app) => {
// Returns the notes.html
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
// Returns the index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}