const db = require('../../../Database/db')
const getOneDraft = async (req, res) => {
    const {initials}= req.body
    console.log(initials);
    
    try {
        db.pool.query('select * from module where initials = $1;',[initials], (err, result) => {
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
    getOneDraft
}