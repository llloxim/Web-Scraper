console.log('Beep Beep');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.once('ready', () => {
	console.log('🍕🍑🍑 boto is a worko 🕺');
});

require('dotenv').config();
client.login(process.env.TOKEN);

const commandHandler = require("./command");
client.on('messageCreate', commandHandler);