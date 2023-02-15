const mysql = require('mysql2/promise');
// const { DATABASE } = require('./config/config');
const colors = require('colors');

const { database } = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((error, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('DATABASE CONNECTION WAS CLOSED'.bgRed);
        }
        if(err.code === 'ER_CON_COUNT:ERROR'){
            console.log('DATABASE HAS TO MANY CONNECTIONS'.bgRed);
        }
        if(err.code === 'ECONNREFUSED'){
            console.log('DATABASE CONNECTION WAS REFUSED'.bgRed);
        }
        if(err.code === 'ER_ACCESS_DENIED_ERROR'){
            console.log('DATABASE PASSWORD ERROR'.bgRed);
        }
        if(err.code === 'ER_BAD_DB_ERROR'){
            console.log('UNKNOWN DATABASE ERROR'.bgRed);
        }

    }

    if(connection) connection.release();
    console.log('DB is connected!!!');
    return
})