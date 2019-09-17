const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    // proxy是一个函数，第一个参数是 前缀
    app.use("/ju", proxy({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/ju": ""
        }
    }));
    app.use("/jo",proxy({
        target:"https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/jo": ""
        }
    }))
};