const discord = require('discord.js')

const info = "[ " + "INFO".red + " ] - "
const error = "[ " + "ERROR".red + " ] - "
const success = "[ " + "SUCCESS".red + " ] - "


exports.run = async (client, message, args) => {
    message.delete();



    const member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.ban(reason).then(member => {

        let banEmbed = new discord.RichEmbed()
        .setColor("RED")
        .setTitle(" (BAN)")
        .addField(`Usuário:`, "`"+member.displayName+"`")
        .addField(`Motivo:`, "`"+reason+"`")
        member.send('Você foi banido(a)').catch(erro => console.log(error+erro))
        message.channel.send(banEmbed)

    }).catch( erro => {
        console.log(error+erro);
    });
}
