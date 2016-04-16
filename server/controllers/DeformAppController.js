var restful = require('node-restful');
module.exports = function(app, route){
    
    // Setup controller for REST
    var rest = restful.model(
    'defdata',
        app.models.defdata
        ).methods(['get', 'put', 'post', 'delete']);    
    
    
    // Register this endpoint with the app
    rest.register(app, route);
    
    // Return middle ware
    return function(req, res, next){
        
        next();
    };
    
};