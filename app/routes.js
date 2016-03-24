var Page = require('./models/page');
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
    
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../public/views/')});
    });
};