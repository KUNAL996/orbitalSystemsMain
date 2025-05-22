const db = require('../../../Database/db')

const getEmpById = async (req, res) => {
    const { Employee_ID } = req.body
    console.log(Employee_ID);
    

    try {
        db.pool.query('select Employee_ID, Name, Phone_Number, Designation, Department, Initials from employee where Employee_ID = $1;',[Employee_ID], (err, result) => {
            if (err) {
                return res.status(500).json({ 'message': 'error while fetching records', 'error': err.message })
            }
            return res.status(201).json({ 'count': result.rowCount, 'data': result.rows })
        })
    } catch (error) {
        res.status(500).json({ 'message': 'server error', 'error': error.message })
    }


}

module.exports = {
    getEmpById
}
