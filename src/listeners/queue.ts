import { Client } from 'discord.js';

import { createQueue } from '../entities/Queue';

import { queueRepository } from '../repositories';

export async function registerQueueListener(
    client: Client
) {
    client.guilds.cache.forEach(async guild => {
        const queue = createQueue();

        await queueRepository.save(queue, guild.id);
    })
    client.on('guildCreate', async guild => {
        const queue = createQueue();

        await queueRepository.save(queue, guild.id);
    })
    client.on('guildDelete', async guild => {
        await queueRepository.delete(guild.id);
    })
}