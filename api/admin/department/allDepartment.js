const db = require('../../../Database/db')


const allDept = async (req, res)=>{
    // const {department} = req.body;
    try {
        db.pool.query('select * from department;', (err, result)=>{
            if (err){
                return res.status(201).json({"Message":"error while fetching records", 'Error':err})
            }
            return res.status(200).json({'count':result.rowCount,'data':result.rows})
        })
    } catch (error) {
        return res.status(201).json({'Message':'server error','error': error.message})

    }
    
}
module.exports={
    allDept
}