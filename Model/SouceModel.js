const cheerio = require('cheerio');
const request = require('superagent');
const mysql   = require('../data/db');
const client = require('../data/Redis');

/**
 *    Shorthand for: souceApi
 *    @type Module analysis
 *    @author dmr
 *    @function souceApi
 *
 */
class SouceModel{

	/**
	 *    Shorthand for: souceApi
	 *    @type Module
	 *    @author dmr
	 *    @function 获取要抓取的内容指定链接
	 *    @param :{
	 *    	html : String
	 *    }
	 *
	 */

	GetNavigationHtml(href, host){

		//存放需要爬取内容页面的链接
		let list = [];

		//访问页面，获取需要爬取的内容
		request
			.get(href)
			.then(res => {

				//获取页面内容
				let $ = cheerio.load(res.text);

				//循环DOM元素  获取链接地址  存入list
				$('.yc_list').each(function(){

					let previou = $(this).find('a');
					list.push( host + previou.attr('href') );

				});

				//处理这些链接
				this.GetHtmlContent(list);

			})

	}

	/**
	 *    Shorthand for: souceApi
	 *    @type Module
	 *    @author dmr
	 *    @function 获取要抓取的内容指定内容
	 *    @param :{
	 *    	href : Navigation
	 *    }
	 *
	 */

	GetHtmlContent(navigationList){


		let sql = "INSERT INTO article (title, author, content) VALUES ";

		for( let i = 0; i < navigationList.length; i++ ){

			//访问页面，获取需要爬取的内容
			request
				.get(navigationList[i])
				.then(res => {

					//获取页面内容
					let $ = cheerio.load(res.text);

					sql += "('" + $('.con_left_title').find('h1').text() + "', '" + $('.info').find('span').eq(0).text().replace('作者:','') + "', '" + $('.content_text').html() + "'),";

					//当所有数据获取完毕以后，执行数据库操作
					if ( i % 10 == 0 && i !=0 || i == navigationList.length - 1 ){

						//去除最后的逗号
						sql = sql.substring(0,sql.length - 1);

						mysql.query(sql, [], function(results,fields){
							//查询后的回调
							//Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
							// fields代表查询的字段信息
						});

						sql = "INSERT INTO article (title, author, content) VALUES ";

					}

				})
				.catch(ex=>{console.log(ex);})

		}

	}

}

module.exports = new SouceModel;