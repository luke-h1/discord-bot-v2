const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const prefix = '!';

client.on('message', function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return; 

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
});

client.login(process.env.BOT_TOKEN)
