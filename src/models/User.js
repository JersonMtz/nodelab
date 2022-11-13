const sql = require('mssql');
const pool = new sql.ConnectionPool(require('../configs/db'));

class User {
    constructor({ firstName, lastName, email, pwd }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
    }

    async save() {
        try {
            if (this.firstName != '' && this.lastName != '' 
            && this.email != '' && this.pwd != '') {
                await pool.connect();
                const statement = await pool.request()
                .input('FirstName', this.firstName)
                .input('LastName', this.lastName)
                .input('Email', this.email)
                .input('Pwd', this.pwd);
                await statement.execute('UserRegister');
                await pool.close();

                return {
                    ok: true,
                    msg: 'Usuario registrado con éxito'
                }
            }

            return {
                ok: false,
                msg: 'Faltan campos requeridos'
            }
        } catch (_) {
            throw 'Ha ocurrido un error al registrar';
        }
    }
}

module.exports = User;