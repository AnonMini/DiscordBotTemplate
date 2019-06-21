//Create a call to the command.

const Discord = require('discord.js');
const client = new Discord.Client();

//Documentation: https://discord.js.org/#/
//Node: https://nodejs.org/es/download/
//You Need: NodeJS and discord JS.

//Starting the bot
client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('online'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);
    console.log('Message')
});

//Messages, comands, etc...
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if ()
});

//Token
client.login("Token");
