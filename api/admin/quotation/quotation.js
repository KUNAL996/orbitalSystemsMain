const db = require('../../../Database/db')

const quotation = async (req, res) => {
    const {
        quotationNo, category, customerName, location, pan_no, address,
        productName, quotationHandledBy, machineType, date, initiationDate,
        // uploadQuotation, // This will hold a File object
        status,
        quotationLostReason
    } = req.body
    console.log(req.body);
    

    const file = req.file;
    console.log(file);
    
    try {
        db.pool.query(`INSERT INTO customer_quotation (quotation_number, quotation_category, 
            pan_no, customer_name, customer_location, customer_address, product_name, machine_type, 
            quotation_handledby, quotation_date, quotation_initiation_date, status, quotation_lost_reason, quotation_file, file_name, file_type)  values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`,
            [quotationNo, category, pan_no, customerName, location, 
                address, productName, machineType, quotationHandledBy, date, initiationDate,
                status, quotationLostReason, file.buffer, file.originalname, file.mimetype], (err, result) => {
                    if (err) {
                        return res.status(201).json({ 'Message': `Quotation NO ${quotationNo} Already Exist`, 'Error': err.message })
                    }
                    return res.status(201).json({ 'Message': 'Quotation created Succesfully' })
                })
    } catch (error) {
        return res.status(201).json({ 'Message': 'server error', 'error': error.Error })

    }
}
module.exports = {
    quotation
}