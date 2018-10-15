const request = require('superagent');
const Query = require('querystring');
const client = require('../data/Redis');


module.exports = function (router) {


	router.use(async (ctx, next) => {

		console.log('gen');
		await next();

	});

	router.get('/', async (ctx, next) => {

		// client.rpush('testList', 'a');
		// client.rpush('testList', 'b');
		// client.lrange('testList', 0, -1, function (err, lists) {
		// 	console.log(lists);
		// })
		await ctx.render('index/index', {
			title: 'Hello sir!'
		})
	})

	/**
	 * Shorthand for:
	 *
	 *    采集页面
	 *    @Get
	 *    @Param null
	 *
	 */

	router.get('/control', async (ctx, next) => {

		await ctx.render('control/index', {
			title: 'Click me to start!'
		})
	})









	/**
	 * Shorthand for:
	 *
	 *    获取list数据
	 *    @Get
	 *    @Param {
	 *          id : 数据ID
	 *    }
	 *
	 */

	router.get('/getlist', async (ctx, next) => {
		// console.log(Query.parse(ctx.req._parsedUrl.query));
		ctx.body = {state: 200,data:'nice!'};
	})

	/**
	 * Shorthand for:
	 *
	 *    获取list数据
	 *    @Post
	 *    @Param {
	 *          id : 数据ID
	 *    }
	 *
	 */

	router.post('/getlista', async (ctx, next) => {
		console.log(ctx.request.body);
		ctx.body = {state: 200,data:'nice!'};
	})

};