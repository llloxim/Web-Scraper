console.log('Beep Beep');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('🍕🍑🍑 boto is a worko 🕺');
});

require('dotenv').config();
client.login(process.env.TOKEN);

const commandHandler = require("./command");
client.on('message', commandHandler);