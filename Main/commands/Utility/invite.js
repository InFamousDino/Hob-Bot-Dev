const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    message.channel.reply('Here you go: https://discord.com/api/oauth2/authorize?client_id=799469166351745036&permissions=8&scope=bot ~~well hob isnt avaliable to public yet~~')
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: [], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: false, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `Get a invite to hob`,
    usage: `${filename}` 
}