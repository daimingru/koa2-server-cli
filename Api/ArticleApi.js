const Query = require('querystring');
const Router = require('koa-router')()
//const Redis = require('../data/Redis');


module.exports = router => {

    Router.get('/', async (ctx, next) => {
        console.log('这里是articleAPI');
        // ctx.body = AjaxReturn(8200,list,'获取成功');
        await next();
    });

    Router.get('/test', async (ctx, next) => {

		let page = Query.parse(ctx.req._parsedUrl.query).page;

		let list = await M('Article').getRecommend(page);

		ctx.body = AjaxReturn(8200,list,'success');

    });

    // 在根路由中注册子路由
    router.use('/article', Router.routes(), Router.allowedMethods())

};
