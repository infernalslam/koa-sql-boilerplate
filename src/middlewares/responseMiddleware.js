const responseMiddleware = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.code || 500
    ctx.body = {
      error_message: error.message || `Server can't process your request.`
    }
  }
}

module.exports = responseMiddleware
