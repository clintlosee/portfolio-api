'use strict';
const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      const url = 'https://api.github.com/repos/clintlosee/portfolio/dispatches';

      const token = process.env.GITHUB_TOKEN;
      console.log('token============:', token)

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      };

      const axiosResult = await axios.post(
        url,
        { event_type: 'created', repo: 'portfolio' },
        { headers }
      );
      console.log('axiosResult:', axiosResult)
    },
  },
};
