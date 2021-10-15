'use strict';

const merge = require('lodash.merge');
const Twilio = require('twilio');
const Service = require('@fabric/core/types/service');

class TwilioService extends Service {
  constructor (settings = {}) {
    super(settings);
    this.settings = merge({
      alerts: [],
      sid: null,
      token: null,
      from: null
    }, settings);

    this.twilio = new Twilio(this.settings.sid, this.settings.token);

    return this;
  }

  async alert (msg) {
  }

  async start () {

  }

  async stop () {
    
  }

  async _createSMS (options) {
    const service = this;
    const settings = merge({
      from: this.settings.from
    }, options);

    return new Promise((resolve, reject) => {
      service.twilio.messages.create(settings).catch((exception) => {
        reject(exception);
      }).then((message) => {
        service.emit('log', `Twilio sent a message: ${message}`);
      }).done(resolve);
    });
  }
}

module.exports = TwilioService;
