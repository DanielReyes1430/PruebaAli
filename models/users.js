const bd = require('../configMysql')

module.exports = {
    findByUsername : (username, callback) => {
        let sql = 'SELECT login FROM user WHERE login=?'
        bd.query(sql,username, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    }
}