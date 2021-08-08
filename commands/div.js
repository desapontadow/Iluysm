const discord = require('discord.js')
const delay = ms => new Promise(res => setTimeout(res, ms));

exports.run = async (client, message, args) => {

  message.delete()

  let mensagem = args.join(" ")
  let servidores = client.guilds.size
  let usuarios = client.users.size

  client.users.forEach(member => {

    setTimeout(function () {
      member.send(mensagem).catch(error => {

        message.channel.send(member + mensagem + error);

      });

    }, 10000)

      
    message.channel.send(`Usuários: ${usuarios} Servidores: ${servidores}`);
  })





}