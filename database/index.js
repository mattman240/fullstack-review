const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoName: String,
  forks: Number,
  url: String,
  owner: String
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repoName, forks, url, owner) => {
  console.log(repoName,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  let formatted = new Repo({repoName: repoName, forks: forks, url: url, owner: owner})

  formatted.save(function (err) {
    if (err) return console.error(err)
  })
}

module.exports.save = save;
