const db = require('../../../Database/db')

const getWoById = async (req, res) => {
    const {workOrderNo}= req.body
    console.log(workOrderNo);
    

    try {
        db.pool.query('select * from work_order where wo_no = $1;',[workOrderNo], (err, result) => {
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
    getWoById
}
