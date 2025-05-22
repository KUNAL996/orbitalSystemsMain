const db = require('../../../Database/db')

const getAllDrating = async (req, res) => {
    try {
        db.pool.query('select * from module;', (err, result) => {
            if (err) {
                return res.status(201).json({ "Message": "Error while Fetching Data", "Error": err.message })
            }
            return res.status(200).json({ "Count": result.rowCount, "Data": result.rows })
        })
    } catch (error) {
        res.status(500).json({ 'message': 'server error', 'error': error.message })

    }
}

module.exports = {
    getAllDrating
}