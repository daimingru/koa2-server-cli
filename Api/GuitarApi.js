const Query = require('querystring');
const Router = require('koa-router')()
//const Redis = require('../data/Redis');


module.exports = router => {

    Router.get('/', async (ctx, next) => {
        console.log(333);
        // ctx.body = AjaxReturn(8200,list,'获取成功');
        await next();
    });

    Router.get('/guitar', async (ctx, next) => {
        ctx.body = AjaxReturn(200,{
        },'success');
    });

    // 在根路由中注册子路由
    router.use('/guitar', Router.routes(), Router.allowedMethods())

};
