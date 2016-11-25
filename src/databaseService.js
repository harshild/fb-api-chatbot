const constants = require('./constants');

var tableData = [];

module.exports.updateTable = function (data) {
    if (constants.DATABASE_ENABLE === true) {
        var pg = require('pg');

        pg.defaults.ssl = true;
        pg.connect(constants.DATABASE_URL, function (err, client) {
            if (err) throw err;

            client.query('CREATE TABLE IF NOT EXISTS ' + constants.TABLE_NAME + '(ID BIGSERIAL PRIMARY KEY NOT NULL,' +
                'NAME CHAR(50) NOT NULL,' +
                'EMAIL CHAR(50) NOT NULL,' +
                'CONTACT_NUMBER CHAR(50) NOT NULL,' +
                'STREAM CHAR(50) NOT NULL,' +
                'PREFERRED_LOCATION CHAR(50) NOT NULL,' +
                'CURRENT_COMPANY CHAR(50) NOT NULL,' +
                'CURRENT_CTC CHAR(50) NOT NULL,' +
                'EXPECTED_CTC CHAR(50) NOT NULL' +
                ');'
            );

            client.query('INSERT INTO ' + TABLE_NAME + '(' +
                ' NAME,' +
                'EMAIL,' +
                'CONTACT_NUMBER,' +
                'STREAM,' +
                'PREFERRED_LOCATION,' +
                'CURRENT_COMPANY,' +
                'CURRENT_CTC,' +
                'EXPECTED_CTC' +
                ') VALUES (' +
                data.NAME + ',' +
                data.EMAIL + ',' +
                data.CONTACT_NUMBER + ',' +
                data.STREAM + ',' +
                data.PREFERRED_LOCATION + ',' +
                data.CURRENT_COMPANY + ',' +
                data.CURRENT_CTC + ',' +
                data.EXPECTED_CTC +
                ');'
            )
        });
    }
}

module.exports.fetchTableData = function () {
    var pg = require('pg');
    var rows = [];


    pg.defaults.ssl = true;
    if (constants.DATABASE_ENABLE !== true) return tableData.push({ "error": "Databse Service not being used. DATABASE_ENABLE is not true" })
    pg.connect(constants.DATABASE_URL, function (err, client) {
        if (err) {
            tableData.push({ "error": err.message })
        }

        var a = true;
        client
            .query('SELECT * FROM ' + constants.TABLE_NAME + ';')
            .on('row', function (row) {
                rows.push(row);
            })
            .on('end', function () {
                tableData = rows;
            });
    });

}

module.exports.readFetchedData = function () {
    return tableData;
}
