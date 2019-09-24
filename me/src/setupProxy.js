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
        target:"http://47.96.135.158",
        changeOrigin: true,
        pathRewrite: {
            "^/jo": ""
        }
    }));
    // 47.96.135.158
	app.use("/liu",proxy({
	    target:"https://api.juooo.com",
	    changeOrigin: true,
	    pathRewrite: {
	        "^/liu": ""
	    }
	}));
	app.use("/tian",proxy({
	    target:"https://m.juooo.com",
	    changeOrigin: true,
	    pathRewrite: {
	        "^/tian": ""
	    }
	}));
    app.use("/meng",proxy({
        target:"https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/meng": ""
        }
    }))
};