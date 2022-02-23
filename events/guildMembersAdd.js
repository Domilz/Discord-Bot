const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        const newMemberEmbed = new MessageEmbed()
            .setColor("#d81e5b")
            .setTitle("New Member")
            .setDescription(`${member.user} has joined the server!`)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp();

        member.guild.channels.cache.get("946150112768454726").send({
            embeds: [newMemberEmbed]
        });
    }
}
