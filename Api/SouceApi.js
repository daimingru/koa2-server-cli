const Query = require('querystring');

module.exports = function (router) {


	router.use('/api', async (ctx, next) => {

		await next();

	});

	/**
	 * Shorthand for:
	 *
	 *    开始爬虫
	 *    @Post
	 *    @Param {
	 *          page : 每页10条数据
	 *    }
	 *
	 */

	router.get('/api/start', async (ctx, next) => {

		let page = Query.parse(ctx.req._parsedUrl.query).page;

		let cont = M('Souce').GetNavigationHtml('https://www.cndzys.com/zt/nanshiys/show-24.html?page=' + page, 'https://www.cndzys.com');

		ctx.body = AjaxReturn(8200,cont,'获取成功');


	})


};