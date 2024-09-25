const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

const connection = mysql.createConnection(dbconfig);

const getConnection = async () => await connection;

connection.connect((err) => {
    if (err) {
        console.log('[db err]', err);
        setTimeout(conexionMysql, 200);
    } else {
        console.log('DB Conectada');
    }
});

connection.on('error', err => {
    console.log('[db err]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        conexionMysql
    } else {
        throw err;
    }
});

function getAllProductsQuery(table){
    
    return new Promise (( resolve, reject) => {

        connection.query(`SELECT * FROM ${table}`, (error, result) => {
          return error ? reject(error) : resolve(result)
        })
    });

}

function getOneProductQuery(table, id){
    
    return new Promise (( resolve, reject) => {

        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result) => {
          return error ? reject(error) : resolve(result)
        })
    });

}

function deleteOneProductQuery(table, data){
    
    return new Promise (( resolve, reject) => {

        connection.query(`DELETE FROM ${table} WHERE id = ?`, data.id, (error, result) => {
          return error ? reject(error) : resolve(result)
        })
    });

}

function createProductQuery(table, data){

    return new Promise (( resolve, reject) => {

        connection.query(`INSERT INTO ${table} SET ? `, data, (error, result) => {
          return error ? reject(error) : resolve(result)
        })
    });

}

function updateProductQuery(table, data){

    return new Promise (( resolve, reject) => {

        connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
          return error ? reject(error) : resolve(result)
        })
    });

}

module.exports = {
    getAllProductsQuery,
    getOneProductQuery,
    deleteOneProductQuery,
    createProductQuery,
    updateProductQuery
}


