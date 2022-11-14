const sql = require('mssql');
const pool = new sql.ConnectionPool(require('../configs/db'));

class User {
    constructor({ firstName, lastName, email, pwd }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
    }
    
   
    constructor({ IdUser,firstName, lastName, email, pwd }) {
        this.idUser=idUser;
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

    static async list() {
        try {
            await pool.connect();
            const statement = await pool.request();
            const { recordset: users } = await statement.execute('UserList');
            await pool.close();

            return {
                ok: true,
                users
            }
        } catch (_) {
            throw 'Ha ocurrido un error al listar usuarios';
        }
    }

    static async delete(IdUser) {
        try {

            // eliminar de bd con procedimiento

            await pool.connect();
            const statement = await pool.request()
             .input(IdUser)
             
            await statement.execute('UserDelete');
            await pool.close();

            return {
                ok: true,
                msg: 'Usuario eliminado con éxito'
            }



        } catch (error) {
            throw ({
                ok: false,
                msg: error
            });
        }
    }

   
    async Update(){
        try {

            // actualizar de bd con procedimiento

            await pool.connect();
            const statement = await pool.request()
            .input('IdUser'=this.idUser)
            .input('FirstName', this.firstName)
            .input('LastName', this.lastName)
            .input('Email', this.email)
            .input('Pwd', this.pwd);
            await statement.execute('UserUpdate');
            
            await pool.close();

            return {
                ok: true,
                msg: 'Usuario actualizado con éxito'
            }



        } catch (error) {
            throw ({
                ok: false,
                msg: error
            });
        }
    }
}

module.exports = User;