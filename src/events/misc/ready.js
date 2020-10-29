const { createStream } = require('table');
const tableConfig = require('../../utils/handeler/tableconfig');
const { commandStatus, eventStatus } = require('../../utils/handeler/registry');
const { prefix } = require('../../utils/config.json');
const { version } = require('../../../package.json');

module.exports = async(client) => {
    console.log(`${client.user.tag} has logged in.`);
    await loadTable(commandStatus, 50);
    console.log("\n");
    await loadTable(eventStatus, 50);
    client.user.setActivity(`ATF Bot V${version} | prefix =  ${prefix} `, { type: "WATCHING" });
}

function loadTable(arr, interval) {
    let fn, i = 0,
        stream = createStream(tableConfig);
    return new Promise((resolve, reject) => {
        fn = setInterval(() => {
            if (i === arr.length) {
                clearInterval(fn);
                resolve();
            } else {
                stream.write(arr[i]);
                i++;
            }
        }, interval);
    })
}