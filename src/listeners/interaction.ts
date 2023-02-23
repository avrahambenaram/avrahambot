import { Interaction, CacheType } from 'discord.js';

import { commands } from '../commands';

export async function interactionListener(interaction: Interaction<CacheType>) {
    if (!interaction.isChatInputCommand()) return;
  
    const command = commands.find(command => command.data.name === interaction.commandName);
    if (command) await command.execute(interaction);
}