const db = require('../../../Database/db')

const getcustById = async (req, res) => {
    const {customerId}= req.body
    console.log(customerId);
    

    try {
        db.pool.query('select * from customer where customer_id = $1;',[customerId], (err, result) => {
            if (err) {
                return res.status(500).json({ 'message': 'error while fetching records', 'error': err.message })
            }
            return res.status(201).json({ 'count': result.rowCount, 'data': result.rows })
        })
    } catch (error) {
        res.status(500).json({ 'message': 'server error', 'error': error.message })
    }


}

module.exports = {
    getcustById
}
