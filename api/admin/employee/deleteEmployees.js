const db = require('../../../Database/db')

const deleteemp = async (req, res)=>{
    // const {emp_id} = req.body
    const {emp_id} = req.body

    console.log('iddd',emp_id);
    

    try{
        result = await db.pool.query('DELETE FROM employee WHERE employee_id =$1;', [emp_id])
        console.log(result);
        console.log(result.rowCount);
        
        
        if (result.rowCount === 0){
            return res.status(404).json({'Message': 'No such Employee ID'})
        }
        return res.status(200).json({'Message':'deleted Successfully'})
    }catch(error){
        return res.status(201).json({'Message':'server error','error': error.message})
    }

}
module.exports={
    deleteemp
}