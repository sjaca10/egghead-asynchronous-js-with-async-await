const fetch = require('node-fetch');

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  return await response.json();
}

showGitHubUser('sjaca10')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  })