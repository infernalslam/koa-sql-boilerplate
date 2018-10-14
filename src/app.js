const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./controllers')
const app = new Koa()
const logger = require('./config/logger')

app.use(cors())
app.use(koaBody({ formLimit: '5mb', multipart: true }))
app.use(router.routes())

app.on('error', (error, ctx) => {
  logger.log('error', error.stack)
})

module.exports = app
