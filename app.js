// @ts-check

import { fileURLToPath } from 'url';
import path from 'path';
import AutoLoad from '@fastify/autoload';

const __dirname = fileURLToPath(path.dirname(import.meta.url));

export default async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
}
