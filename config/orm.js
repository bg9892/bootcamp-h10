// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES (${vals});`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, cols, vals, id, cb) {
        let queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

// Export the orm object for the model.
module.exports = orm;