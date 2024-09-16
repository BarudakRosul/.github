const axios = require("axios");

async function fetchOrgGitHubRepoData(org) {
    const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
    const repos = response.data;

    let totalStars = 0;
    let totalPublicRepos = 0;

    for (const repo of repos) {
        if (repo.name !== '.github') {
            if (!repo.private) {
                totalPublicRepos += 1;
            }
            totalStars += repo.stargazers_count;
        }
    }

    return { stars: totalStars, repos: totalPublicRepos };
}

module.exports = fetchOrgGitHubRepoData;
