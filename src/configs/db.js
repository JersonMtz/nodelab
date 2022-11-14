// const connection = new (require('rest-mssql-nodejs'))({
//     user: '',
//     password: '',
//     server: 'localhost',
//     database: 'web2',
//     port: 1433, 
//     options: { 
//         encrypt: true
//     } 
// });

// "sqlsrv:server = tcp:labnode.database.windows.net,1433; Database = web2", "usernode", "{your_password_here}"

const config = {
    user: 'usernode',
    password: 'Abcd1234',
    server: 'labnode.database.windows.net', 
    database: 'web2',
    port: 1433
}

module.exports = config;