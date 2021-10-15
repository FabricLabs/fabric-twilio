'use strict';

const merge = require('lodash.merge');
const Twilio = require('../services/twilio');
const settings = merge({}, require('../settings/default'), require('../settings/local'));

async function main (input) {
  const twilio = new Twilio(input);
  await twilio.start();
}

main(settings)
