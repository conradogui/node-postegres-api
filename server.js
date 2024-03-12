import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send(`${address}`)
})

fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})