
const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                S: "string",
            }),
            new webpack.ProvidePlugin({
                UUID: "uuid",
            }),
        ],
    },
    devServer: {
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:10241/",
                changeOrigin: true,
                secure: false,
            },
        },
    },
};