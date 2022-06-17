const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employeeController')
const { model } = require('mongoose')

router.get('/showAll', EmployeeController.showAll)
router.get('/show', EmployeeController.show)
router.post('/insert', EmployeeController.insert)
router.put('/update', EmployeeController.update)
router.delete('/delete', EmployeeController.destroy)

module.exports = router