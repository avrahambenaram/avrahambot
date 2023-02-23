import { createQueueRepository } from './implementations/in-memory/queue';

const queueRepository = createQueueRepository();

export {
    queueRepository
}