var Page = require('./models/page');
var Dom = require('./models/dom');
var path = require('path');

module.exports = function(app) {
    app.get('/api/pages', function(req, res) {
        Page.find(function(err, pages) {
            if (err) res.send(err);
            
            res.json(pages);
        });
    });
    
    app.post('/api/pages', function(req, res) {
        
        var page = new Page({
            name: req.body.name
        });
                
        page.save(function(err) {
            if (err) res.send(err);

            res.json({message: 'Page created'});
        });
    });
    
    app.get('/api/dom', function(req, res) {
        Dom.find(function(err, domData) {
            if (err) res.send(err);
            
            res.json(domData);
        });
    });
    
    app.post('/api/dom', function(req, res) {
        
        var domData = new Dom({
            dropzone: req.body.dropzone
        });
        domData.save(function(err) {
            if (err) res.send(err);

            res.json({message: 'Dom created'});
        });
    });
    
    app.put('/api/dom/:dom_id', function(req, res) {
        
        Dom.findOne({_id: req.params.dom_id}, (err, dom) => {
            dom.dropzone = req.body.dropzone;
            
            dom.save((err) => {
                if (err) res.send(err);
                
                res.json({message: 'Dom updated'})
            });
        });
    });
    
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../public/views/')});
    });
};