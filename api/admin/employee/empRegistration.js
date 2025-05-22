const db = require('../../../Database/db')
const bcrypt = require('bcrypt')

const empReg = async (req, res)=>{
    const {employeeId, employeeName, contactNumber, designation, department, password, initials} =  req.body
    console.log(req.body);
    
    const hash = await bcrypt.hash(password,10)
    try{
        db.pool.query(`insert into employee(Employee_ID, Name, Phone_Number, Designation, Department, Password, Initials) 
            values($1,$2,$3,$4,$5,$6,$7);`,
            [employeeId, employeeName, contactNumber, designation, department, hash, initials], (err, result)=>{
            if (err){
                return res.status(201).json({'Message': 'Employee with Employee Id OR Initials Already exist ', 'Error':err.message})
            }
            return res.status(201).json({'Message': 'Employee Added Succesfully'})
        })
    }catch(error){
        return res.status(201).json({'Message':'server error','error': error.message})
    }

}

module.exports={
    empReg
}