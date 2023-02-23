import { Queue } from '@entities/Queue';

import { IQueueRepository } from '../../IQueueRepository';

interface Queues {
    [index: string]: Queue
}

export function createQueueRepository(): IQueueRepository {
    const queues: Queues = {};

    async function findByGuildId(guildId: string) {
        const queue = queues[guildId];

        return queue ? queue : null;
    }

    async function save(queue: Queue, guildId: string) {
        queues[guildId] = queue;
    }

    return {
        findByGuildId,
        save,
        async delete(guildId: string) {
            delete queues[guildId];
        }
    }
}