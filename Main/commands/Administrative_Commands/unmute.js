const filename = require('path').basename(__filename).split(".")[0]

exports.execute = (client, message, args) => {
  const target = message.mentions.users.first();

  const Tick = message.guild.emojis.cache.get("824145757241081949")
  const Fail = message.guild.emojis.cache.get("824145774324744193")

        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`${Tick} <@${memberTarget.user.id}> has been unmuted`);
        } else{
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
  description: `Unmute a user.`,
  usage: `${filename} <@user>` 
}