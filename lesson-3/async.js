const fetch = require('node-fetch');

/* Function expression */
const fetchGitHubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

(async () => {
  const user = await fetchGitHubUser('sjaca10');
  console.log(user.name);
  console.log(user.location);
})();

/* Class declaration */
class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const client = new GitHubApiClient();
  const user = await client.fetchUser('mariusschulz');
  console.log(user.name);
  console.log(user.location);
})();