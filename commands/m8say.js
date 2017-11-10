exports.run = (client, message) => {
  message.delete();
    var say = message.content.replace("b!say ", "")
    message.channel.send(say)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'say',
  description: '',
  usage: ''
};
