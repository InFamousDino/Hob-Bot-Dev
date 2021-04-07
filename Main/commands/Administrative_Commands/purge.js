const filename = require('path').basename(__filename).split(".")[0]
exports.execute = async (client, message, args) => {
    const Tick = message.guild.emojis.cache.get("824145757241081949")
    const Fail = message.guild.emojis.cache.get("824145774324744193")
    var amount = args.join(" ");
    if (!amount)
      return message.channel.send(`${Fail} You haven't given an amount of messages which should be deleted!`);
    if (isNaN(amount)) return message.channel.send(`${Fail} You Crazy? That isn't a number!`);
  
    if (amount > 100)
      return message.channel.send(`${Fail} You can't delete more than 100 messages at once!`);
    if (amount < 1) return message.channel.send(`${Fail} You cant delete less than 0`);
    amount++;
    await message.channel.messages.fetch({ limit: amount }).then((messages) => {
      message.channel.bulkDelete(messages);
      message
        message.channel.send(`${Tick} Deleted ${amount - 1} messages.`)
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        })
        .catch(/* uh idk*/);
    });
}
exports.config = {
    disabled: false, // if the command is disabled
    permission: ['MANAGE_MESSAGES'], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    guildOnly: true, // if you can use commands in only guilds or also dms
    hobDevOnly: false, // If you want only hob devs can use
    aliases: []
}
exports.info = {
    name: filename,
    category: __dirname.split("/")[__dirname.split("/").length - 1],
    description: `clean those naughty messages away`,
    usage: `${filename} <amount>` 
}