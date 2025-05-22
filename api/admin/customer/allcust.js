// const db = require('../Database/db')
const db = require('../../../Database/db')

const allCust = async (req, res)=>{
    try {
        db.pool.query('select * from customer;', (err, result)=>{
            if (err){
                return res.status(201).json({'Message':'error while fetching records', 'error': err.message})
            }
            return res.status(200).json({ 'count': result.rowCount, 'data':result.rows})
        })
    }catch (error) {
        res.status(201).json({'message':'server error', 'error':error.message })
    }
}
module.exports={
    allCust
}