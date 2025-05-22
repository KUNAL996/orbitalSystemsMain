const db = require('../../../Database/db')

const deleteModule = async (req, res)=>{
    const {module_id} = req.body
    try{
        result = await db.pool.query('DELETE FROM module WHERE module_id =$1;', [module_id])
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
deleteModule
}