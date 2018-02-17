const express = require('express');
const bodyParser = require('body-parser')
const helper = require('../helpers/github.js')
const save = require('../database/index.js')
let app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  helper.getReposByUsername(req.body.data, (data, err) => {
    if(err) {
      console.error(err)
    } else {
      data = JSON.parse(data)
      for(var i = 0; i < data.length; i++) {
        let name = data[i].owner.login
        let repoName = data[i].name
        let url = data[i].url
        let forks = data[i].forks
        save.save(repoName, forks, url, name)
      }
    }
  })
  res.end('sucessfully posted to server')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
