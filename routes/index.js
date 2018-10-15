const router = require('koa-router')()
const souceApi = require('../Api/SouceApi')(router)
const ArticleApi = require('../Api/ArticleApi')(router)
const souceController = require('../Controller/SouceController')(router)
const ArticleController = require('../Controller/ArticleController')(router)


router.get('/list', async (ctx, next) => {
	await ctx.render('list', {
		title: 'Hello sir!'
	})
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
