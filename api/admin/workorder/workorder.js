const db = require('../../../Database/db')

const workOrder = async (req, res) => {
    const { quotationNo, workOrderNo, date, machineType, customerName,
        location, address, productName, status, quotationCategory, poNo, poDate, poReceiveDate,
        poBasicValue, totalValue, paymentTerms } = req.body

    // console.log(req.body);
    try {
        db.pool.query(`INSERT INTO work_order (wo_no, quotation_number, wo_date, quotation_category,
             product_name, machine_type, customer_name, customer_location, customer_address, status, 
             po_no, po_date, po_received_date, po_basic_value, total_value, payment_terms) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`,
            [workOrderNo, quotationNo, date, quotationCategory, productName,  machineType, customerName,
                location, address, status, poNo, poDate, poReceiveDate,
                poBasicValue, totalValue, paymentTerms], (err, result) => {
                    if (err) {
                        return res.status(201).json({ 'Message': 'WorkOrder With same Quotation Already Exists', 'Error': err.message })
                    }
                    return res.status(201).json({ 'Message': 'WorkOrder Created Succesfully' })
                })
    } catch (error) {
        return res.status(201).json({ 'Message': 'server error', 'error': error.message })

    }
}
module.exports = {
    workOrder
}