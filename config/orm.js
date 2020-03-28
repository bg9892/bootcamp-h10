// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        const queryString = `INSERT INTO ${table} (${cols}) VALUES (?);`;
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, cols, vals, id, cb) {
        const queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE id = ${id};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

// Export the orm object for the model.
module.exports = orm;