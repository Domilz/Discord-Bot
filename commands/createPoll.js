const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed} = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a poll to vote "Yes/No" on')
        .addStringOption((option) => 
            option
            .setName('question')
            .setDescription('Enter your question to vote on')
            .setRequired(true)
        ),

    
    async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('pollyes') //resembles zoombot 'value'
                .setEmoji('✔')
                // .setLabel('YES')
                .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
                .setCustomId('pollno')
                .setLabel('(☞ﾟヮﾟ)☞')
                // .setLabel('NO')
                .setStyle('DANGER'),
        )
        .addComponents(
            new MessageButton()
                .setCustomId('results')
                .setEmoji('🔨')
                // .setLabel('Results')
                .setStyle('PRIMARY')
        )

        const questionEmbed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`${interaction.options.getString('question')}`)
            .setDescription('To register your vote, click on YES/NO');
        

        await interaction.reply({embeds: [questionEmbed], components: [row] });    
    }
        
}