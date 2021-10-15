'use strict';

const merge = require('lodash.merge');
const Twilio = require('twilio');
const Service = require('@fabric/core/types/service');

class TwilioService extends Service {
  constructor (settings = {}) {
    super(settings);
    this.settings = merge({
      twilio: {
        sid: null,
        token: null
      }
    }, settings);

    this.twilio = new Twilio(this.settings.twilio.sid, this.settings.twilio.token);

    return this;
  }

  async start () {

  }

  async stop () {
    
  }
}

module.exports = TwilioService;
