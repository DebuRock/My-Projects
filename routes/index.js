const express = require('express');
const emplCtrl = require('../controllers/employeeManagement.server.controller');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/employee', function(req, res) {
  //return emplCtrl.getAllEmployee(req,res);
  return emplCtrl.getEmployeeByDesignation(req,res);
});

router.post('/employee', function(req, res) {
  return emplCtrl.addEmployee(req,res);
});

module.exports = router;
