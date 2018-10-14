const webhookController = require('./webhook.controller')

exports.default = {
  controller: webhookController,
  routes: [
    {
      method: 'GET',
      url: '/status',
      handler: 'status'
    }
  ]
}