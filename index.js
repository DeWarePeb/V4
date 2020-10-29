const discord = require('discord.js');
const client = new discord.Client();
const config = require('./src/utils/config.json');
const { registerCommands, registerEvents } = require('./src/utils/handeler/registry.js');

(async() => {
    client.login(config.token);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../../events');
    await registerCommands(client, '../../commands');

})();