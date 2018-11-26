const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/cnd', { 
        target: 'http://www.cndesign.com',
        changeOrigin:true,
        pathRewrite:{
            "^/cnd": ""
        }
    }));
};
