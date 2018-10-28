const {token} = require('../settiings/credentials.json');

module.exports = {

    ready : (bot) => {
        bot.login(token)
        bot.on('ready', () => {
            bot.user.setActivity('Müzik', {type: 'listening'});
            bot.user.setStatus('dnd');
            console.log('MÜZİK ÇALMAYA HAZIRIM BİTCH!!');
        });
    }
    
};
