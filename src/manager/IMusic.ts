import { VoiceConnection } from '@discordjs/voice';

import { Song } from '@entities/Song';
import { IQueueRepository } from '@repositories/IQueueRepository';

export interface IMusicManager {
    queue: IQueueRepository
    song: {
        search(searchText: string): Promise<Song>
        play(connection: VoiceConnection, song: Song): Promise<void>
        pause()
    }
}