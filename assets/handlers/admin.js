module.exports = (metaquery) => {
  var args = metaquery.args
  var channel = metaquery.channel
  var message = metaquery.message
  var guild = metaquery.guild

  if (!metaquery.member.permissions.has('ADMINISTRATOR')) {
    channel.send('Vous ne pouvez pas utiliser cette commande')
    return
  }

  if (args[1] === 'role') {
    if (args[2] !== undefined) {
      var totogglerole = message.mentions.members.first() || guild.members.get(args[2])

      if (totogglerole !== undefined) {
        if (args[3] !== undefined) {
          var role = guild.roles.find(r => r.name === args[3])

          if (role !== undefined) {
            totogglerole.addRole(role)

            message.delete()
          } else channel.send('Role non reconnu')
        } else channel.send('Merci de spécifier un rôle')
      } else channel.send('Utilisateur non reconnu')
    } else channel.send('Merci de spécifier un utilisateur')
  } else {
    channel.send('Votre commande est incorrecte')
  }
}
