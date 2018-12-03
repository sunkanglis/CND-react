
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config)
    // 配置编译 es6 decorator
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@as': resolve('assets'),
        '@c': resolve('components'),
        '@views': resolve('views'),
        '@lib': resolve('lib'),
        '@store':resolve('store'),
        '@connect':resolve('connect')
    }

    return config;
};


// proxy:{
//     "/cnd":{
//         target:'http://www.cndesign.com',
//         changeOrigin:true,
//         pathRewrite : {
//             '^/cnd' : ''
//           }
//     }

// }