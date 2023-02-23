import { CommandInteraction, SlashCommandBuilder, VoiceChannel } from 'discord.js';
import { joinVoiceChannel } from '@discordjs/voice';

import { ICommand } from '../ICommand';

import { queueRepository } from '@repositories';

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Toca música no canal do usuário')
        .addStringOption(option =>
            option
                .setName('nome')
                .setDescription('nome da música')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const songSearch = interaction.options.data[0].value;
        const voiceChannel: VoiceChannel = interaction.member.voice.channel;
        
        if (!voiceChannel) return await interaction.reply('Você não está em um canal de voz');
        if (!voiceChannel.joinable) return await interaction.reply('Não posso entrar no seu canal de voz');

        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator
        })

        await interaction.reply(songSearch);
    }
}

module.exports = command;