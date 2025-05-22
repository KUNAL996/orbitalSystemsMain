const db = require('../../../Database/db')

const deleteCustm = async (req, res)=>{
    // const {emp_id} = req.body
    // const {customerId} = req.body

    console.log('iddd',customerId);
    

    try{
        result = await db.pool.query('DELETE FROM customer WHERE customer_id = $1;', [customerId])
        // console.log(result);
        // console.log(result.rowCount);
        
        
        if (result.rowCount === 0){
            return res.status(404).json({'Message': 'No such Employee ID'})
        }
        return res.status(200).json({'Message':'deleted Successfully'})
    }catch(error){
        return res.status(201).json({'Message':'server error','error': error.message})
    }

}
module.exports={
    deleteCustm
}