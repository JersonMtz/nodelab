const User = require('../models/User'); 

const Create = async (req, res) => { 
    try {
        const data = req.body;
        const user = new User({
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            pwd: data.password
        });
        const result = await user.save();
        if(!result.ok) {
            return res.status(400)
                .json({
                    ...result
                });
        }

        res.status(201)
            .json({ ...result })

    } catch (err) {
        return res.status(500)
            .json({
                ok: false,
                msg: err
            });
    }
}

const Update = (req, res) => {
    
    const { id } = req.parms;
    const data = req.body;
    
    console.log(id, data);

    res.json({
        ok: true,
        msg: 'Usuario actualizado con éxito'
    })
}

const Delete = (req, res) => {
    
    const { id } = req.parms;
    
    res.json({
        ok: true,
        msg: 'Usuario eliminado con éxito'
    })
}

module.exports = {
    Create,
    Update,
    Delete
}