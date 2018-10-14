const fs = require('fs')
const path = require('path')
const KoaRouter = require('koa-router')

const routeConfigs = fs.readdirSync(__dirname)
  .reduce((current, next) => {
    if (next.indexOf('.route') !== -1 && (next.indexOf('.') !== 0) && (next !== 'index.js')) {
      let config = require(path.join(__dirname, next)).default
      let configName = next.split('.')[0]
      current[configName] = config
    }
    return current
  }, {})

  let routerObject = new KoaRouter({ prefix: '/api' })
  routerObject.options('*', () => {})
  for (const key in routeConfigs) {
    let routeConfig = routeConfigs[key]
    let routes = routeConfig.routes
    let controller = routeConfig.controller
    if (!routeConfig) continue
    routes.forEach(route => {
      let middlewares = []
      middlewares.push(controller[route.handler])
      routerObject[route.method.toLowerCase()](route.url, ...middlewares)
    })
  }

  module.exports = routerObject
