const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    if(!args[0]) return message.channel.send(`Invalid arguments: usage \`${filename} <user> [reason]\``)

    const user = client.findUser(message, args[0])
    if(user[0] == false) return message.channel.send(`${user[1]}`)

    if (user[1].user.id === message.guild.owner.id) {
        return message.channel.send(`You cannot ${filename} the owner!`)
    }

    if (user[1].user.id === client.user.id) {
        return message.channel.send(`I'd prefer you don't ${filename} me`)
    }

    if (user[1].user.id === message.author.id) {
        return message.channel.send(`I don't think you want to ${filename} yourself`)
    }

    if (user[1].roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID) {
        return message.channel.send(`You can't ${filename} people higher role than yourself!`);
    }

    const rawuser = client.findUser(message, args[0])
    if(rawuser[0] == false) return message.channel.send(rawuser[1])
    const banlog = new Discord.MessageEmbed()
    let reason = args.slice(1).join(" ");
    if(!args[1]) reason = 'No Reason given'
    const member = rawuser[1]

    banlog.setThumbnail('https://cdn.discordapp.com/avatars/799469166351745036/bc83973d2a186ff38efc52110b676c8a.webp')
    banlog.setAuthor('Hob Bot Moderation Log')
    banlog.setColor('#FF0000')
    banlog.addFields(
        {
            name: `${member.user.tag} has been Banned`,
            value: `Reason: ${reason}, Banned by Administrator: ${message.author.tag}`,
        }
    )

    message.guild.members.ban(args[0], { reason: reason } )
    message.channel.send(banlog)
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: ['BAN_MEMBERS'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: true, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `example description`,
    usage: `${filename} <Id> [Reason]` 
}