const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('Muzik calmiyor.', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`suanki ses: **${queue.volume}/100**`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, lutfen 0 ile 100 arasi ses gir!`, `${config.prefix}volume <volume>`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, lutfen 0 ile 100 arasi ses gir!`, `${config.prefix}volume <volume>`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`Ses suan icin **${queue.volume}/100**`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['ses']
};
