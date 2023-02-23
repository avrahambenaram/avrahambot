import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

import { ICommand } from '../ICommand';

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Diz qualquer coisa que desejar')
        .addStringOption(option =>
            option
                .setName('texto')
                .setDescription('Um texto qualquer')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const textValue = interaction.options.data[0].value;
        
        await interaction.reply(textValue);
    }
}

module.exports = command;