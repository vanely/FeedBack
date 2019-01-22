const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/auth/google', proxy({
        target: 'http://localhost:5000/'
    }));
}