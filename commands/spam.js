const discord = require('discord.js')

exports.run = async (client, message, args) => {





    let spamMessage = args[0];
    message.delete();
    for (pas = 0; pas < 2000; pas++) {

        let spamEmbed = new discord.RichEmbed()
		.setTitle(`Iluysm - Spammer`)
        .setColor("RED")
        .setDescription(`${spamMessage}`)


        .setFooter(`Iluysm - by dozzay`)
        message.channel.sendMessage(spamMessage, spamEmbed)


    }

}
