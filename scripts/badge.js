const axios = require("axios");
const fs = require("fs");
const path = require("path");
const fetchOrgGitHubRepoData = require("./fetch.js");
const { optimizeSvg, prettierSvg } = require("./formattedSVG.js");

// File name for the badges
const starsBadgeFile = path.join(__dirname, "../images/badges/stars-count.svg");
const reposBadgeFile = path.join(__dirname, "../images/badges/repos-count.svg");

(async () => {
    const fetch = await fetchOrgGitHubRepoData("BarudakRosul");
    const starsBadge = await axios.get(`https://img.shields.io/badge/star%27s%20count-${fetch.stars}-orange?&style=for-the-badge`);
    const reposBadge = await axios.get(`https://img.shields.io/badge/repo%27s%20count-${fetch.repos}-red?&style=for-the-badge`);

    fs.writeFileSync(starsBadgeFile, await prettierSvg(optimizeSvg(starsBadge.data)));
    fs.writeFileSync(reposBadgeFile, await prettierSvg(optimizeSvg(reposBadge.data)));
})();
