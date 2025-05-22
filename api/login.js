// const db = require('../Database/db')
// const bcrypt = require('bcrypt')

// const login = async (req, res)=>{
//     const {initials, password} = req.body
//     try{
//         const result = await db.pool.query('select * from employee where initials = $1;',[initials])

//         if(result.rows.length === 0){
//             return res.status(401).json({'Message':'Invalid Username'})
//         }

//         const dbpwd = result.rows[0].password
//         const check_pwd = await bcrypt.compare(password, dbpwd )
//         if (check_pwd){
//             return res.status(201).json({'Message':'Login successfull'})
//         }

//     }catch(error){
//         return res.status(500).json({'Message': 'server Error', 'Error':error.message})
//     }

// }

// module.exports={
//     login
// }

const db = require('../Database/db');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { initials, password } = req.body;
    try {
        const result = await db.pool.query('SELECT * FROM employee WHERE initials = $1;', [initials]);

        if (result.rows.length === 0) {
            return res.status(201).json({'Success':false, 'Message': 'Invalid Username' });
        }

        const dbpwd = result.rows[0].password;

        // Log the values to debug
        // console.log('Password from request:', password);
        // console.log('Password from database:', dbpwd);

        if (!password || !dbpwd) {
            return res.status(201).json({ 'Success':false, 'Message': 'Password is missing' });
        }

        const check_pwd = await bcrypt.compare(password, dbpwd);
        if (check_pwd) {
            return res.status(200).json({ 'Success':true,'Message': 'Login successful' });
        } else {
            return res.status(201).json({ 'Success':false, 'Message': 'Invalid Password' });
        }

    } catch (error) {
        return res.status(201).json({ 'Success':false, 'Message': 'Server Error', 'Error': error.message });
    }
};

module.exports = {
    login
};
