const Employee = require('../models/employeeManagement.server.model');

exports.addEmployee = function (req, res) {
    let employee = new Employee({
        empId: req.body.empId,
        name: req.body.name,
        company: req.body.company,
        designation: req.body.designation,
    });

    employee.save();

    //redirect to home page
    res.redirect(303, '/');
};

exports.getAllEmployee = function (req, res) {
    let query = Employee.find();

    query.sort({name: 'desc'})
        .limit(12)
        .exec((err, result) => {
            res.send(result)
        });
}

exports.getEmployeeByName = function (req, res) {
    Employee.findByName('Pushpita', function (err, result) {
        res.send(result);
    })
}

exports.getEmployeeByDesignation = function (req, res) {
    Employee.find().byDesignation('Software Engineer')
        .exec((err, result) => {
            res.send(result);
        });
}
