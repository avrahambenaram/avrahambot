import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { ICommand } from '../ICommand';

import commandsConfig from '@config/commands.json';

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Limpa o chat')
        .addIntegerOption(option => 
            option
                .setName('quantidade')
                .setDescription('Quantidade de mensagens para deletar')
                .setRequired(false)
        ),

    async execute(interaction: CommandInteraction) {
        const messagesFetchLimit = interaction.options.data[0].value || commandsConfig.clear.limit;
        const messages = await interaction.channel?.messages.fetch({ limit: messagesFetchLimit });
        const isUserAllowed = interaction.memberPermissions?.has('ManageMessages') || interaction.memberPermissions?.has('Administrator');
        const messagesExist = !!messages;

        if (!isUserAllowed) return await interaction.reply('Você não tem permissão para executar este comando');
        if (!messagesExist) return;

        await interaction.channel.bulkDelete(messages);
        await interaction.reply(`Chat limpo por <@${interaction.member?.user.id}>`);
    }
}

module.exports = command;