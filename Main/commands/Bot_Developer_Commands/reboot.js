const filename = require('path').basename(__filename).split(".")[0]
exports.execute = (client, message, args) => {
    const Tick = message.guild.emojis.cache.get("824145757241081949")
    const Fail = message.guild.emojis.cache.get("824145774324744193")

    const { token } = require('../../config.json')

    function resetBot() {
        message.channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(token))
        .then(() => message.channel.send(`${Tick} Hob Reset`));
    }

    resetBot()
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
    description: `Reboot the hobhob`,
    usage: `${filename}` 
}