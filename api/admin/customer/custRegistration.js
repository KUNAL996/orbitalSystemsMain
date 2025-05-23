const db = require('../../../Database/db')

const custReg = async(req, res)=>{
    const { customerId, customerName, email, contactPerson , contactNumber, 
        department , address, location, gstNumber, panNumber, city, state, 
        country, stateCode, status,} = req.body

        console.log(req.body);
        
    
    try {
        db.pool.query(`INSERT INTO customer (customer_id, customer_name, customer_location,
            customer_address, contact_person, contact_no, customer_email, department, 
            gst_no, PAN_No, city, state, country, state_code, customer_status) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`,
            [customerId, customerName, location, address, contactPerson, contactNumber, email, 
            department, gstNumber, panNumber, city, state, country, stateCode, status], (err, result)=>{
            if (err){
                return res.status(201).json({'Message': 'Customer Already Exists', 'Error':err.message})
            }
            return res.status(201).json({'Message': 'Customer Registered Succesfully'})
        })
    } catch (error) {
        return res.status(201).json({'Message':'server error','error': error.message})

    }
}  
module.exports={
    custReg
}