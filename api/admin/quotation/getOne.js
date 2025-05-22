const db = require('../../../Database/db')

const getOneQuotation = async (req, res) => {
    const { quotationNo } = req.body
    try {
        const result = await db.pool.query(`select quotation_number, quotation_category, 
            pan_no, customer_name, customer_location, customer_address, product_name, machine_type, 
            quotation_handledby, quotation_date, quotation_initiation_date, status, quotation_lost_reason 
            from customer_quotation where quotation_number = $1;`, [quotationNo])
        console.log(result);
            

        if (result.rows.length === 0) {
            return res.status(201).json({ message: "Quotation not found" });
        }
        return res.status(200).json({ "Count": result.rowCount, "Data": result.rows })

    } catch (error) {
        return res.status(201).json({'Message':'server error','error': error.message})
    }
}
module.exports={
    getOneQuotation
}