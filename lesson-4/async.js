const fetch = require('node-fetch');

async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200)
    throw Error(body.message);

  return body;
}

fetchGitHubUser('idonotexistwea')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });

/* Using with normal try-catch */
async function showGitHubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

showGitHubUser('idonotexistweon');