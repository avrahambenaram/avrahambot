import { Queue } from '../entities/Queue';

export interface IQueueRepository {
    findByGuildId(guildId: string): Promise<Queue | null>
    save(queue: Queue, guildId: string): Promise<void>
    delete(guildId: string): Promise<void>
}