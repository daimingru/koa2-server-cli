const router = require('koa-router')()
require('../Api/GuitarApi')(router)
require('../Api/ArticleApi')(router)
// const ArticleController = require('../Controller/ArticleController')(router)

router.get('/', async (ctx, next) => {
	await next();
});

module.exports = router;
