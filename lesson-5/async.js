const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  // The problem with this approach is that the request is been made secuencially
  // instead of parallel, so with a lot of request we will have a lot of
  // problems with performance
  // const user = await fetchFromGitHub(`/users/${handle}`);
  // const repos = await fetchFromGitHub(`/users/${handle}/repos`);

  // With this approach, we execute the HTTP request concurrently and down below
  // we wait for both request come back.
  const userPromise = fetchFromGitHub(`/users/${handle}`);
  const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos('sjaca10');
