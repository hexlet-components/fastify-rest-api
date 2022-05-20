// @ts-check

import { user, collection } from '../../data.js';

export default async (fastify, _opts) => {
  fastify.get('/users', async (request, reply) => {
    const users = collection(user);
    return users;
  });

  fastify.get('/users/:id', async (request, reply) => ({ root: true }));
  fastify.post('/users/:id', async (request, reply) => ({ root: true }));
  fastify.patch('/users/:id', async (request, reply) => ({ root: true }));
  fastify.delete('/users/:id', async (request, reply) => ({ root: true }));
};
