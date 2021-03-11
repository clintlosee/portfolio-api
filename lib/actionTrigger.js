const axios = require('axios');

async function actionTrigger(event) {
  console.log('running action trigger');
  const url = process.env.GITHUB_ACTION_URL;

  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json'
  };

  const axiosResult = await axios.post(
    url,
    { event_type: event },
    { headers }
  );

  return;
}

module.exports = {
  actionTrigger
}