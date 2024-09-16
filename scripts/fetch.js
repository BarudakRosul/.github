const axios = require("axios");

async function fetchOrgGitHubRepoData(org) {
    try {
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

        return { totalStars, totalPublicRepos };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { totalStars: 0, totalPublicRepos: 0 };
    }
}

module.exports = fetchOrgGitHubRepoData;
