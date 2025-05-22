const db = require('../../../Database/db')
const bcrypt = require('bcrypt')

const masterDraft = async (req, res)=>{
    const {module_id, workOrder, station, module, releaseDate, initials} =  req.body
    console.log(req.body);
  
    try{
        db.pool.query(`INSERT INTO module (module_id, wo_no, station, module_name, release_date, initials)  
            values($1,$2,$3,$4,$5,$6);`,
            [module_id, workOrder, station, module, releaseDate, initials], (err, result)=>{
            if (err){
                return res.status(201).json({'Message': 'Error While creating master drafting', 'Error':err.message})
            }
            return res.status(201).json({'Message': 'Master Drafting created Succesfully'})
        })
    }catch(error){
        return res.status(201).json({'Message':'server error','error': error.message})
    }

}

module.exports={
    masterDraft
}