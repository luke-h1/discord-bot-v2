/* eslint no-use-before-define: 0 */  // --> OFF
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client(); 
const commandHandler = require('./commands'); 
const prefix = '!';

client.on('message', function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.find(
        (ch) => ch.name === 'member-log'
    );
    if (!channel) return;
    channel.send('welcome to the server, ${member}');
});

client.on('message', commandHandler)

client.login(process.env.BOT_TOKEN)  



