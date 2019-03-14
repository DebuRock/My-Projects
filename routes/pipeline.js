const express = require('express');
const pipelineCtrl = require('../controllers/app.server.controller');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('pipeline', { title: 'Pipeline'});
});

router.post('/', function(req, res) {
    return pipelineCtrl.createPipeline(req,res);
});

router.post('/execute', function(req, res) {
    return pipelineCtrl.executePipeline(req,res);
});

module.exports = router;