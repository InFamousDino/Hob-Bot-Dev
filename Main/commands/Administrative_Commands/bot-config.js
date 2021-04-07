const Discord = require("discord.js");
const filename = require("path").basename(__filename).split(".")[0];
exports.execute = (client, message, args) => {
  const embed = new Discord.MessageEmbed();
  const Tick = message.guild.emojis.cache.get("824145757241081949")
  const Fail = message.guild.emojis.cache.get("824145774324744193")

  embed
    .setTitle("**Bot Configuration**")
    .setAuthor("InFamousDino#7871")
    .setFooter("Hob Bot")
    .setColor("#00AAFF")
    //.setImage('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg"
    )

    .addFields(
      {
        name: "**Prefix:**",
        value: `${client.config.prefix}`,
        inline: true,
      },

      {
        name: "**Logs:**",
        value: `undefined`,
        inline: true,
      },

      {
        name: "**Muted Role:**",
        value: `undefined`,
        inline: true,
      },

      {
        name: "**Mod Role:**",
        value: `undefined`,
        inline: true,
      },

      {
        name: "**Admin Role:**",
        value: `undefined`,
        inline: true,
      }
    );
  message.channel.send(embed);
};
exports.config = {
  disabled: false, // if the command is disabled
  permission: ["MANAGE_SERVER"], // List of perms https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
  guildOnly: true, // if you can use commands in only guilds or also dms
  hobDevOnly: false, // If you want only hob devs can use
  aliases: [],
};
exports.info = {
  name: filename,
  category: __dirname.split("/")[__dirname.split("/").length - 1],
  description: `server config`,
  usage: `${filename}`,
};
