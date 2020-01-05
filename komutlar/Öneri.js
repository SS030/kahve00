const Discord = require('discord.js');


exports.run = function(client, message, args) {
const ayarlar = '../ayarlar.json'

var öneri = args.slice(0).join(' ');
var guildID = "ayarlar.Sunucu-İD";
var channelID = "ayarlar.Öneri*kanal-İD";

if (!öneri) {
return message.reply("Bir mesaj belirtin **Doğru kullanım** !Öneri <Öneri>");
}else {
var embed = new Discord.RichEmbed()
    .setTimestamp()
    .addField("Eylem:", "Öneri,")
    .addField("Kullanıcı:",message.author.tag)
    .addField("ID", message.author.id)
    .addField("Öneri", öneri)

    client.guilds.get(guildID).channels.get(channelID).send(embed);
message.channel.send("Öneriniz Alınmıştır! Teşekkür Ederiz!");
};
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['Öner', ' Öner', 'Öneri', ' Öneri'], 
  permLevel: 0 
};

exports.help = {
  name: 'Öneri', 
  description: 'Botun sahibine önerilerinizi atar', 
  usage: 'Öneri <Öneri>' 
};

