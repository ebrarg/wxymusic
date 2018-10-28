const discord = require('discord.js');
const {prefix} = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=- Help -=- <>: ZORUNLU, []: isteğe bağli`)
        .addField(`${prefix}play <music/url>`, 'Muzik calar!')
        .addField(`${prefix}search <music>`, 'Söylediğin muziğin ilk 10 sonucunu arar.')
        .addField(`${prefix}skip`, 'Siradaki sarkiya gecer (Eğer yetkin yoksa 3 oy ister.)')
        .addField(`${prefix}volume [volume]`, 'Ses seviyesini gösterir (sayi girerseniz değistirir.)')
        .addField(`${prefix}pause`, 'Muziği durdurur.')
        .addField(`${prefix}resume`,'Muziği tekrar baslatir')
        .addField(`${prefix}stop`, 'Muziği kapatip kanaldan cikar')
        .addField(`${prefix}reload <command>`, 'Komutu yukler.');

    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: ['yardim']
};