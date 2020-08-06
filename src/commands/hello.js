module.exports = async(msg) => { 
  await msg.channel.send('hello I am a 🤖')
}








} else if (command === 'hello') {
      message.reply(`Beep boop I am a 🤖`);
  } else if (command === 'quote') {
      const i = Math.floor(Math.random() * quotes.length);
      const reply = quotes[i];
      message.reply(`${reply}`);
  } else if (command === 'whoami') {
      message.reply(message.author.displayAvatarURL());
  } else if (command === 'dog') {
      const API_URL = 'https://dog.ceo/api/breeds/image/random/'; 
      async function getRandomDogs(){
          const res = await fetch(API_URL); 
          const json = await res.json(); 
          const embed = new Discord.Message.embed() 
          .setTitle('here is your dog!').setImage(body.url)    
          link = body.url; 
         
      


          }}


