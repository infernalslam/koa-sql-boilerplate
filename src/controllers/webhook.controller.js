const webhook = {
  async status (ctx) {
    ctx.body = { text: 'status ok' }
  }
}

module.exports = webhook
