const db = require('../../../Database/db')

const deleteDept = async (req, res) => {
    const { department } = req.body;
    try{
        result = await db.pool.query('DELETE FROM department WHERE department =$1;', [department])
        console.log(result);
        console.log(result.rowCount);
        
        
        if (result.rowCount === 0){
            return res.status(404).json({'Message': 'No such Department'})
        }
        return res.status(200).json({'Message':'deleted Successfully'})
    }catch(error){
        return res.status(201).json({'Message':'server error','error': error.message})
    }
}
module.exports={
    deleteDept
}