const filename = require('path').basename(__filename).split(".")[0]
const Discord = require('discord.js')
exports.execute = (client, message, args) => {
  const ms = require('ms')
  const target = message.mentions.users.first();

  const Tick = message.guild.emojis.cache.get("824145757241081949")
  const Fail = message.guild.emojis.cache.get("824145774324744193")

  const rawuser = client.findUser(message, args[0])
  if(rawuser[0] == false) return message.channel.send(rawuser[1])
  const banlog = new Discord.MessageEmbed()
  const member = rawuser[1]

  banlog.setThumbnail('https://cdn.discordapp.com/avatars/799469166351745036/bc83973d2a186ff38efc52110b676c8a.webp')
  banlog.setAuthor('Hob Bot Moderation Log')
  banlog.setColor('#FF0000')
  banlog.addFields(
      {
          name: `${Tick} ${member.user.tag} has been Muted`,
          value: `Muted by Administrator: ${message.author.tag}`,
      }
  )

  if (target) {

      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
          memberTarget.roles.add(muteRole.id);

          message.channel.send(banlog)

          return
      }


  } else {
      message.channel.send(`${Fail} Cant find that member!`);
  }
}

exports.config = {
  disabled: false, // if the command is disabled
  permission: ['ADMINISTRATOR'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
  guildOnly: true, // if you can use commands in only guilds or also dms
  hobDevOnly: false, // If you want only hob devs can use
  aliases: []
}

exports.info = {
  name: filename,
  category: __dirname.split("/")[__dirname.split("/").length - 1],
  description: `Mute a user.`,
  usage: `${filename} <@user>` 
}