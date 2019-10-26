const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === "production";
const isAnalyze = process.env.VUE_APP_ANALYZE === 'true';

const assetsCDN = {
    css: [
        'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css',
        'https://cdn.remixicon.com/releases/v2.0.0/remixicon.css',
    ],
    js: [
        'https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js'
    ]
}
module.exports = {
    devServer: {
        port: 8080,
        open: true,//自动打开浏览器窗口
    },
    configureWebpack: (config) => {
        if (isProd) {
            config.externals = {
                // 包名:导出变量名
                'animejs': 'anime',
            };
            config.plugins.push(new webpack.BannerPlugin('© 2019 Charbo. All Right Reserved.'));
            if (isAnalyze) {
                config.plugins.push(new BundleAnalyzerPlugin());
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'))
            .set('@assets', path.resolve(__dirname, 'src/assets'))
            .set('@style', path.resolve(__dirname, 'src/style'));
        config.performance
            .set('maxAssetSize', 1024 * 1024)
            .set('maxEntrypointSize', 1024 * 1024);

        config.plugin('html').tap(args => {
            args[0].cdn = {
                // css: assetsCDN.css,
                js: isProd ? assetsCDN.js : []
            };
            return args;
        });

    },
    // css: {
    //     sourceMap: true
    // }
};