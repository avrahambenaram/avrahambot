import { VoiceChannel } from 'discord.js';

import { Song } from './Song';

export interface Queue {
    voiceChannel: VoiceChannel | null
    songs: Song[]
    volume: number
    playing: boolean
}

export function createQueue(): Queue {
    const queue: Queue = {
        voiceChannel: null,
        songs: [],
        volume: 1,
        playing: false
    }

    return queue;
}