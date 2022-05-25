// @ts-check

import { user, collection } from '../../data.js';

export default async (fastify) => {
  fastify.addSchema({
    $id: 'user',
    type: 'object',
    properties: {
      email: { type: 'string' },
      phone: { type: 'string' },
      name: { type: 'string' },
    },
  });

  const schemaIndex = {
    response: {
      200: {
        type: 'array',
        items: { $ref: 'user#' },
      },
    },
  };

  fastify.get('/users', { schemaIndex }, async () => {
    const users = collection(user, 10);
    return users;
  });

  const schemaShow = {
    response: {
      200: {
        $ref: 'user#',
      },
    },
  };

  fastify.get('/users/:id', { schema: schemaShow }, async (request) => {
    // eslint-disable-next-line no-unused-vars
    const { id } = request.params;
    return user();
  });

  // fastify.get('/users/:id', async (request, reply) => ({ root: true }));
  // fastify.post('/users/:id', async (request, reply) => ({ root: true }));
  // fastify.patch('/users/:id', async (request, reply) => ({ root: true }));
  // fastify.delete('/users/:id', async (request, reply) => ({ root: true }));
};
