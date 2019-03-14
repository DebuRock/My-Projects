const Pipeline = require('../models/app.server.model');
const Ansible = require('node-ansible');

exports.createPipeline = function (req, res) {
    let pipeline = new Pipeline({
        name: req.body.name,
        playbookName: req.body.playbookName,
        executedBy: req.body.executedBy
    });
    pipeline.save()
};

exports.getAllPipeline = function (req, res) {
    Pipeline.find(function (err, result) {
        res.send(result);
    })
}

exports.executePipeline = function (req, res) {
    let pipeline = new Pipeline({
        name: req.body.name,
        playbookName: req.body.playbookName,
        executedBy: req.body.executedBy
    });

    var playbook = new Ansible.Playbook().playbook(pipeline.playbookName);
    playbook.on('stdout', function(data) { res.render('pipeline', {playbookLog: data.toString()}); });
    playbook.on('stderr', function(data) { res.render('pipeline', {playbookLog: data.toString()}); });
    playbook.inventory('/home/kovair/ansible/dev')
    playbook.exec({cwd:"/home/kovair/ansible/playbooks"});

}