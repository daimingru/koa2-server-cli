const Query = require('querystring');
const Redis = require('../data/Redis');

module.exports = function (router) {


	router.use('/', async (ctx, next) => {

		await next();

	});

	/**
	 * Shorthand for:
	 *
	 *    获取推荐文章
	 *    @Post
	 *    @Param {
	 *          page : 每页10条数据
	 *    }
	 *
	 */

	router.get('/api/getRecommend', async (ctx, next) => {

		let page = Query.parse(ctx.req._parsedUrl.query).page;

		let list = await M('Article').getRecommend(page);

		ctx.body = AjaxReturn(8200,list,'获取成功');

	})



};