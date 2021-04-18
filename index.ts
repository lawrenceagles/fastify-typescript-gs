import { fastify, FastifyInstance } from 'fastify';
import pino from 'pino';

const server: FastifyInstance = fastify({
	logger: pino({ level: 'info' })
});

server.get('/ping', async (request, reply) => {
	server.log.info('log message');
	return 'pong\n';
});

server.listen(8080, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
