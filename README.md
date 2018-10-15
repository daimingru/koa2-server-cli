# okay-node-server

> okay-node-server


```javascript
|-- Api                              // Api接口层

* |   |-- ArticleApi.js              // 文章接口

* |   |-- SouceApi.js                // 指令接口


|-- bin                              // 项目开发环境配置

* |   |-- www                        // 运行脚本入口


|-- Controller                       // Controller层

* |   |-- BaseController.js          // base基类Model层同理

* |   |-- ArticleController.js       // 文章控制层

* |   |-- souceController.js         // 指令控制层


|-- data                             // 项目开发环境配置

* |   |-- db.js                      // 数据库配置文件

* |   |-- redis.js                   // Redis配置文件


|-- Model                            // Model层

* |   |-- BaseModel.js               // 同理Controller

* |   |-- ArticleModel.js            // 文章模块

* |   |-- souceModel.js              // 指令模块


|-- Public                           // 静态资源

* |   |-- views                      // 静态资源 按照模板层模块化打包


|-- routes                           // routes

* |   |-- index.js                   // 前端页面router


|-- viesw                            // 模板层

* |   |-- index                      // 按照模块化的功能页面

```


## Build Setup

``` bash
# start project
npm run start

```

QA：
    1、未集成前端自动化
