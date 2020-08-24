require('dotenv').config();  
const { Client } = require('discord.js'); 
const client = new Client(); 
const prefix = '!'; 


client.on('ready', () => {
  console.log(`${client.user.username} has successfully logged in`); 
}); 

client.on('message', (message) => { 
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)){
    const [commandName, ...args] = message.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/);   // white space regex 
      console.log(commandName); 
      if(commandName === 'kick'){ 
        if(args.length === 0) return message.reply('Please provide an ID')
        const member = message.guild.members.cache.get(args[0]); 
        if(member){
          member.kick()
            .then((member) => message.channel.send(`${member} was kicked`)) 
            .catch((e) => message.channel.send('I do not have perimissions to kick')); 

        }else { 
          message.channel.send('Member not found...');  
        } 
      }else if (commandName === 'ban'){
        if(!message.member.hasPermission('BAN_MEMBERS')) 
        return message.reply('You do not have permissions to use that command'); 
        if(args.length === 0) return message.reply('provide an ID'); 
        try { 
        const user =  message.guild.members.ban(args[0]); 
        message.channel.send('User banned successfuly');
      }catch(e){
        console.log(e); 
        message.channel.send('An Error occured. Either the user was not found or 🤖 does not have correct permissions')
      } 
    }
       
  }
})

client.login(process.env.BOT_TOKEN); 
