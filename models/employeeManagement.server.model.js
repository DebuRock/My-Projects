const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empId: String,
    name: String,
    company: String,
    designation: String,
    joiningDate: {type: Date, default: Date.now()}
});

employeeSchema.methods.findAllEmployee_Designation = function(cb){
    return this.model('Employee').find({designation: this.designation}, cb);
}

employeeSchema.statics.findByName = function(name, cb){
    return this.find({name: new RegExp(name, 'i')}, cb);
};

employeeSchema.query.byDesignation = function(designation){
    return this.where({ designation: designation});
}

//Export the models
module.exports = mongoose.model('Employee', employeeSchema);