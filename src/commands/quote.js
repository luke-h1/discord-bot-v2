const quotes = [
    'The 1% Of The 1% - Elliot',
    'Relationships Are About Control - Elliot',
    "How do I take off a mask when it stops being a mask, when it's as much a part of me as I am ?- Elliot",
    'A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who you are. - Elliot',
    'Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world. - Elliot',
    'So this is what a revolution looks like, people in expensive clothing running around. Not how I pictured it - Elliot',
    'I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads. - Elliot',
    'Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no. The actual will to take is often the only thing that’s necessary. - Elliot',
    'I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order. - Elliot',
    'Every day, we change the world, but to change the world in a way that means anything, that takes more time than most people have. It never happens all at once. It’s slow. It’s methodical. It’s exhausting. We don’t all have the stomach for it. - Elliot',
    "World catastrophes like this, they aren't caused by lone wolves like you. They occur because men like me allow them. You just had to stumble onto one of them. - Elliot",
    "I'm gonna fix the world I broke, and put it back together better than it was before. - Elliot",
    "I don't want your proof. I want your belief - Elliot",
    'Politics is for puppets. - Elliot',
    "Now he's doing what all small animals do when they're scared, pretend they're bigger and scarier. - Elliot",
];


module.exports = async (msg, args) => { 
  if (!args.length) return; 
  const i = Math.floor(Math.random()* quotes.length); 
  cosnt reply = quotes[i]; 
  await msg.channel.send(`${msg.author} ${reply}`🤖)
}