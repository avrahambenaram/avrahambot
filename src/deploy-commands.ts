import { REST, Routes } from 'discord.js';

import { commands } from './commands';

const commandsSlashBuilds = commands.map(command => command.data);

export interface deployCommandsProps {
    token: string
    clientId: string
}
export async function deployCommands({ token, clientId }: deployCommandsProps) {
    try {
        console.log('Started refreshing application (/) commands.');

        const rest = new REST({ version: '10' }).setToken(token);
    
        await rest.put(Routes.applicationCommands(clientId), { body: commandsSlashBuilds });
    
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}