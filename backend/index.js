const fastify = require('fastify')({ logger: true })
const autoload = require('fastify-autoload')
const path = require('path')

fastify.register(autoload, {
    dir: path.join(__dirname, 'services')
})

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})
fastify.post('/', async (request, reply) => {
    return request.body
})
fastify.listen(8080, '0.0.0.0')