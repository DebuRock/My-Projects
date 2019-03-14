const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pipelineSchema = new Schema({
    title: String,
    playbookName: String,
    lastExecutionDate: {type: Date, default: Date.now()},
    executedBy: String
});

module.exports = mongoose.model('pipeline', pipelineSchema);