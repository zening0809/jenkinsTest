/**
 * Middleware config
 * @return
 */
module.exports = {
    list: ['view'], //加载的中间件列表
    config: { //中间件配置 
        view: {
            view_path: process.env.ROOT_PATH + '/static/view', //模板目录
            engine_config: { cache: false }, //模版引擎配置
            default_theme: '', //默认模板主题
        }
    }
};