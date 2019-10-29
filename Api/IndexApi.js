/**
 * Shorthand for:
 *    @title  IndexApi
 *    @date   2019-10-29
 *    @author Curt
 *    @desc   所有API接口路由在此汇总
 *    @Param  ApiController
 */

const fs = require('fs');
const Router = require('koa-router')()

let bindChildRouter= () => {

    let files = fs.readdirSync(__dirname);

    files.forEach(function (item, index) {

        if(item === 'IndexApi.js') return false;

        let router_child = require(`./${item}`);
        // 在根路由中注册子路由
        Router.use(router_child.path, router_child.Router.routes(), router_child.Router.allowedMethods())
    
    })

}

module.exports = () => {

    bindChildRouter();

    Router.get('/', async (ctx, next) => {
        console.log('this is /api Index');
        await next();
    });
    
    Router.get('/test', async (ctx, next) => {
        ctx.body = AjaxReturn(200,{
            data: 'this is /api/test'
        },'success');
    });

    return Router;

};