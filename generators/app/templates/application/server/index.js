const express = require('express');
const consola = require('consola');
const helmet = require('helmet');
const { Nuxt, Builder } = require('nuxt');

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

const app = express();

async function start() {
  const nuxt = new Nuxt(config);

  /* Hot-reload if using nuxt dev. */

  if (config.dev) {
    const builder = new Builder(nuxt);

    await builder.build();
  }

  /* Apply a host of security middleware. */

  app.use(
    helmet.noSniff(),
    helmet.ieNoOpen(),
    helmet.featurePolicy({
      features: {
        payment: ["'none'"],
        geolocation: ["'none'"],
        camera: ["'none'"],
        microphone: ["'none'"],
        speaker: ["'none'"],
      }
    }),
    helmet.referrerPolicy({
      policy: 'strict-origin'
    }),
    helmet.frameguard(),
    helmet.xssFilter(),
    nuxt.render,
  );

  app.disable('x-powered-by');

  /* Run the app. */

  app.listen(port, host);
  consola.ready({
    message: `nuxt.js server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();
