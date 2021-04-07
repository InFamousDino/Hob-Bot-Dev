const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const Tick = message.guild.emojis.cache.get("824145757241081949")
    const Fail = message.guild.emojis.cache.get("824145774324744193")

    client.user.setPresence({
        activity: {
            name: args.join(" "),
            type: 0
        }
    })

    message.channel.send(`${Tick} Sucessfully set my status to ` + args.join(" ") + '.')
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: true, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `sets hob's status`,
    usage: `${filename} <what to set to>` 
}