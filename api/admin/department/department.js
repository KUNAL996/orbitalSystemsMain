const db = require('../../../Database/db')

const dept = async (req, res) => {
    const {department} = req.body
    console.log(department);
    

    try {
        db.pool.query('insert into department(department) values($1);', [department], (err, result) => {
            if (err) {
                return res.status(201).json({ 'Message': 'Department Already Exists', 'Error': err })
            }
            return res.status(200).json({ 'Message': 'Department Added Succesfully' })

        })

    } catch (error) {
        return res.status(201).json({ 'Message': 'server error', 'error': error.message })

    }
}

module.exports={
    dept
}