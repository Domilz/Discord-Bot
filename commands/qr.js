const { SlashCommandBuilder } = require("@discordjs/builders")
const fetch = require('node-fetch');


//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${commandParamSplitted}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('qr')
        .setDescription('Echoes your input!')
        .addStringOption((option) => 
            option
            .setName('link')
            .setDescription('A link for QR')
            .setRequired(true)
        ),

    async execute(interaction) {
        await interaction.deferReply();
        interaction.editReply(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${interaction.options.getString('link')}`);

    }
}