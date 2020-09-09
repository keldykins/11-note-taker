// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    // Read from the db.json file using fs, res.json the response
    //res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    // Read from db.json again using fs
    // Push in the note with an id
    // Write to db.json using fs
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params);
    // Read from db.json again using fs
    // Use a for loop to find the one that matches the req.params.id and delete it
    // Write to db.json again using fs
  });
};
