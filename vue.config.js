module.exports = {
    //vue的配置
    devServer:{
        //针对开发服务器的配置
        proxy:{
            "/api":{//当请求路径以/api 开头时，开发服务器要代理到http://study.yuanjin.teach/
                target:"http://study.yuanjin.tech",
            }
        }
    }
}