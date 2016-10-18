'use strict';

import suspend, { resume } from 'suspend';
import joi from 'joi';
import Ovh from 'ovh';

module.exports = {
  config: {
    validate: {
      payload: {
        appKey: joi.string().alphanum().required(),
        appSecret: joi.string().alphanum().required(),
        consumerKey: joi.string().alphanum().required(),
        numbers: joi.string().regex(/^[0-9,]+$/).required(),
        message: joi.string().required()
      }
    }
  },

  handler: suspend(function*(request, reply) {
    const { appKey, appSecret, consumerKey, numbers, message } = request.payload;

    const ovh = Ovh({
      appKey,
      appSecret,
      consumerKey
    });

    const serviceName = yield ovh.request('GET', '/sms/', resume());

    const options = {
      message: message,
      senderForResponse: true,
      receivers: numbers.split(',')
    };

    const result = yield ovh.request('POST', '/sms/' + serviceName + '/jobs/', options, resume());

    reply(result);
  })
};
