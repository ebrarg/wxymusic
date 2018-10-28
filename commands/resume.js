const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && !queue.playing) {
        queue.playing = true;
        queue.connection.dispatcher.resume();
        return message.channel.send(`Muzik tekrar baslatildi`);
    }

    return [message.delete(), utils.timed_msg('⚠ Herhangi bir muzik oynatilmiyor.', 5000)];
    
};

module.exports.help = {
    name: 'resume',
    aliases: ['devam']
};
