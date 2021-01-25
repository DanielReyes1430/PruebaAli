const userDAO = require('../models/users')

const userValidate = (req, res) => {
    userDAO.findByUsername(req.params.name, data =>{
        try {
            if (!data) throw new Err("Usuario disponible")
            res.send({
                status: true, message: 'Usuario ocupado' })
        }
        catch(Err) {
            res.send({
                status: false, message: 'Usuario disponible' })
        }
    })
}

module.exports = {
    userValidate
}