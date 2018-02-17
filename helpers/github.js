const request = require('request');
const config = require('../config.js');

let getReposByUsername = (name, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  console.log(name, 'inside github.js')
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (error, response, body) => {
    cb(response.body, error)

  })
}

module.exports.getReposByUsername = getReposByUsername;
