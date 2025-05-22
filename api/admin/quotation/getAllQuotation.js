const db = require('../../../Database/db')

const getAllQuotations = async (req, res) => {
    try {
        db.pool.query(`select quotation_number, quotation_category, 
            pan_no, customer_name, customer_location, customer_address, product_name, machine_type, 
            quotation_handledby, quotation_date, quotation_initiation_date, status, quotation_lost_reason from customer_quotation;`, (err, result) => {
            if (err) {
                return res.status(201).json({ "Message": "error while fetching records", 'Error': err })
            }
            return res.status(200).json({ 'count': result.rowCount, 'data': result.rows })

        })
    } catch (error) {
        return res.status(201).json({'Message':'server error','error': error.message})

    }
    
}
module.exports={
    getAllQuotations
}