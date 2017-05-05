const fetch = require('node-fetch');

/* Normal function with promises */
function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    });
}

showGitHubUser('mariusschulz');

/* Asynchronous function with async and await */
async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;

  // Wait until the promise is settled. If the promise is rejected then the
  // await throws the rejected value. If the promise is resolved, the await
  // expression will return the resolved value.
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

showGitHubUserAsync('sjaca10');