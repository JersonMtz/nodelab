const connection = new (require('rest-mssql-nodejs'))({
    user: '',
    password: '',
    server: 'localhost',
    database: 'web2',
    port: 1433, 
    options: { 
        encrypt: true
    } 
});

module.exports = connection;