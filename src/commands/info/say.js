const discord = require('discord.js');
const { prefix } = require('../../utils/config.json');

module.exports = {
    run: async(client, message) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;
        let MSG = message.content.split(`${prefix}say `).join("");
        if (!MSG)
            return message.channel.send(`You did not specify your message to send!`);
        message.channel.send(MSG);
        message.delete();
    },
    aliases: [],
    description: 'Get the bot to say something'
}