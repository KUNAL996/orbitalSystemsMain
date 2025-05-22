const express = require('express')
const app = express()
const cors = require('cors')
const port = 5200
const bodyparser = require('body-parser')


const multer = require('multer');
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage });


const login = require('./api/login')
const EmpRegistration = require('./api/admin/employee/empRegistration')
const allEmp = require('./api/admin/employee/allEmployees')
const deleteEmp = require('./api/admin/employee/deleteemployees')
const empById = require('./api/admin/employee/getEmpById')

const deprt = require('./api/admin/department/department')
const allDept = require('./api/admin/department/allDepartment')
const DeleteDept = require('./api/admin/department/deleteDept')
const custReg = require('./api/admin/customer/custRegistration')
const allCust = require('./api/admin/customer/allcust')
const custById = require('./api/admin/customer/custById')
const deleteCust = require('./api/admin/customer/deletecust')

const workOrder = require('./api/admin/workorder/workorder') 
const getAllWo = require('./api/admin/workorder/getallwo')
const getAllWobyId = require('./api/admin/workorder/getWoById')

const masterDrafting = require('./api/admin/master-drafting/drafting')
const getMasterDraft = require('./api/admin/master-drafting/getAllMaster-drafting')
const getOneDraft = require('./api/admin/master-drafting/getOneDraft')
const deleteModule = require('./api/admin/master-drafting/delete-module')

const quotation = require('./api/admin/quotation/quotation')
const dwQuote = require('./api/admin/quotation/downloadquotation')
const getAllQuotations = require('./api/admin/quotation/getAllQuotation')
const getOneQuotation = require('./api/admin/quotation/getOne')

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions))

app.use(bodyparser.json())


url = '/api/v1/'

app.get('/',(req, res)=>{
    res.json({'message':'express server is working'})
})
app.post('/api/v1/login', login.login)
app.post('/api/v1/employeeregistration', EmpRegistration.empReg)
app.get('/api/v1/allEmployees', allEmp.allEmployee)
app.post('/api/v1/deleteEmployee', deleteEmp.deleteemp)
app.post('/api/v1/getEmpById', empById.getEmpById)


app.post('/api/v1/department', deprt.dept)
app.get('/api/v1/allDepartment', allDept.allDept)
app.post('/api/v1/deleteDepartment', DeleteDept.deleteDept)

app.post('/api/v1/customerRegistration', custReg.custReg )
app.get('/api/v1/allCustomers', allCust.allCust )
app.post('/api/v1/customerById', custById.getcustById )
app.post('/api/v1/deleteCustomer', deleteCust.deleteCustm )


app.post('/api/v1/workorder', workOrder.workOrder )
app.get('/api/v1/getallWorkOrder', getAllWo.allWo )
app.post('/api/v1/getworkorderById', getAllWobyId.getWoById )

app.post('/api/v1/masterDrafting', masterDrafting.masterDraft)
app.get('/api/v1/getAllMasterDrafting', getMasterDraft.getAllDrating)
app.post('/api/v1/getDrafting', getOneDraft.getOneDraft)
app.post('/api/v1/deleteModule', deleteModule.deleteModule )


app.post('/api/v1/quotation',upload.single('excelFile'), quotation.quotation)
app.post('/api/v1/dwquote',dwQuote.downloadQuotation)
app.get('/api/v1/getAllQuotation', getAllQuotations.getAllQuotations)
app.post('/api/v1/getOneQuotation', getOneQuotation.getOneQuotation)





app.listen(port,()=>{
    console.log(`running on ${port}`);
    
})