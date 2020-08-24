require('dotenv').config();  
const { Client } = require('discord.js'); 
const client = new Client(); 


client.on('ready', () => {
  console.log('The Bot has logged in')
}); 

client.login(process.env.BOT_TOKEN); 
