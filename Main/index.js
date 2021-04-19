const Discord = require('discord.js')
const client = new Discord.Client() 
const config = require('./config.json')
const embedupdatemessage = new Discord.MessageEmbed
const { LogsChannel } = require('./config.json')

client.commands = new Map()
client.aliases = new Map()

client.config = require('./config.json')

require(`./functions`)(client)
require('./command')(client)

client.on('ready', async () => {
    console.log('Hob is activated!')

    setInterval(() => { 
        client.destroy()
        client.login(config.token)
      }, 3600000); 
})

client.on("messageUpdate", function(oldMessage, newMessage){
  embedupdatemessage.setTitle('**Message Changed!**')
  embedupdatemessage.setFooter('Hob Bot')
  embedupdatemessage.setColor('#00AAFF')

  embedupdatemessage.setAuthor('Hob Bot Moderation Log')
  
  embedupdatemessage.addFields(
      {
      name: `New Message`,
      value: `${newMessage}`,
      inline: true
      },
  
      {
          name: `Old Message`,
          value: `${oldMessage}`,
          inline: true
      },

      {
        name: `Author`,
        value: `${newMessage.author}`,
        inline: true
      },

      {
        name: `Channel`,
        value: `${newMessage.channel}`,
        inline: true
      }
  )

  client.channels.cache.get(`${LogsChannel}`).send(embedupdatemessage)
});

client.login(config.token)

