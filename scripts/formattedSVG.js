const { optimize } = require("svgo");
const prettier = require("prettier");

function optimizeSvg(data) {
    return optimize(data, {
        multipass: true,
        pretty: true,
        plugins: [
            { name: 'removeDoctype', active: true },
            { name: 'removeComments', active: true }
        ]
    }).data;
};

async function prettierSvg(data) {
    return await prettier.format(data, {
        parser: "html",
        tabWidth: 4,
        useTabs: false,
        printWidth: 99999999999999999999999999999999,
    });
};

module.exports = { optimizeSvg, prettierSvg };
