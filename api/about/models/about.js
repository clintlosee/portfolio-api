'use strict';
const {actionTrigger} = require('../../../lib/actionTrigger');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      console.log('AFTER CREATE');
      if (process.env.NODE_ENV === 'production') {
        actionTrigger('created');
      }
    },

    async afterUpdate(data) {
      console.log('AFTER UPDATE');
      if (process.env.NODE_ENV === 'production') {
        actionTrigger('updated');
      }
    },
  },
};
