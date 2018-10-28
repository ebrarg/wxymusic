const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    let votes = bot.votes.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, bu komutu kullanmak icin ses kanalina katil!`, `${config.prefix}skip`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Muzik calmiyor.', 5000)];

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        if (votes.voters.includes(message.author.id)) return [message.delete(), utils.timed_msg(utils.cmd_fail(`⚠ ${message.author}, sen zaten oy verdin! **${votes.votes}/3** oy`, `${config.prefix}skip`), 5000)];

        votes.votes++
        votes.voters.push(message.author.id);
        message.channel.send(`${message.author}, gecmek icin oy verdin! **${votes.votes}/3** oy`);

        if (votes.votes > 3) return queue.connection.dispatcher.end();
    } else return queue.connection.dispatcher.end();
    
};

module.exports.help = {
    name: 'skip',
    aliases: ['gec']
};
