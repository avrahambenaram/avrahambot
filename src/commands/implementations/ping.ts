import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { ICommand } from '../ICommand';

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com \'Pong!'),

    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!')
    }
}

module.exports = command;