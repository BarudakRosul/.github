const axios = require("axios");
const fs = require("fs");
const path = require("path");
const fetchOrgGitHubRepoData = require("./fetch.js");

// File name for the badges
const starsBadgeFile = path.join(__dirname, "../images/badges/stars-count.svg");
const reposBadgeFile = path.join(__dirname, "../images/badges/repos-count.svg");

(async () => {
    const { totalStars, totalPublicRepos } = await fetchOrgGitHubRepoData("BarudakRosul");
    const starsBadge = await axios.get(`https://img.shields.io/badge/star%27s%20count-${totalStars}-orange?&style=for-the-badge`);
    const reposBadge = await axios.get(`https://img.shields.io/badge/repo%27s%20count-${totalPublicRepos}-red?&style=for-the-badge`);

    fs.writeFileSync(starsBadgeFile, starsBadge.data);
    fs.writeFileSync(reposBadgeFile, reposBadge.data);
})();
