const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const prefix = '!';

client.on('message', function (message) {
    if (message.author.bot) return; // if the user is a bot don't respond 
    if (!message.content.startsWith(prefix)) return; // if user doesn't include prefix at start don't respond 

    const commandBody = message.content.slice(prefix.length);  
    const args = commandBody.split(' ');  
    const command = args.shift().toLowerCase();  

    if (command === 'ping'){
        const timeTaken = Date.now() 
        message.reply(`Hello, This message had a latency of ${timeTaken}ms.`)
    }

    else if (command === 'sum'){
        const numArgs = args.map(x => parseFloat(x)); 
        const sum = numArgs.reduce((counter, x) => counter += x);  
        message.reply(`The sum of all the args you provide is ${num}!`)
    } 

    else if (command === 'hello'){
        message.reply(`Beep boop I am a 🤖`)
    }
});

client.login(process.env.BOT_TOKEN)
