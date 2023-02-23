import { Client, GatewayIntentBits } from 'discord.js';
import { z } from 'zod';
import 'dotenv/config';

import { deployCommands } from './deploy-commands';

import { interactionListener } from './listeners/interaction';
import { registerQueueListener } from './listeners/queue';

const envValidation = z.object({
    BOT_TOKEN: z.string(),
    CLIENT_ID: z.string()
})
const envParsed = envValidation.safeParse(process.env);

if (!envParsed.success) throw new Error('Should have BOT_TOKEN and CLIENT_ID environment variables');

const { BOT_TOKEN, CLIENT_ID } = envParsed.data;
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

deployCommands({
    clientId: CLIENT_ID,
    token: BOT_TOKEN
})

bot.on('messageCreate', message => console.log(message.content));
bot.on('interactionCreate', interactionListener);

registerQueueListener(bot);

bot.login(BOT_TOKEN);