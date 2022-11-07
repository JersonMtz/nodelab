const Create = (req, res) => {
    
    const data = req.body;
    
    console.log(data);
    
    // usar procedimiento almacenado
    res.json({
        ok: true,
        msg: 'Usuario registrado con éxito'
    })
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