import dotenv from 'dotenv'

dotenv.config()

export const DISCORD_ADMINISTRATOR_ROLE_ID = process.env['DISCORD_ADMINISTRATOR_ROLE_ID'] ?? '101010101'
export const DISCORD_BLOCK_CONTENT_CREATOR_ROLE_ID = process.env['DISCORD_BLOCK_CONTENT_CREATOR_ROLE_ID'] ?? '101010101'
export const DISCORD_BOT_COMMANDS_CHANNEL_ID = process.env['DISCORD_BOT_COMMANDS_CHANNEL_ID'] ?? '101010101'
export const DISCORD_CLIENT_ID = process.env['DISCORD_CLIENT_ID'] ?? 'clientId'
export const DISCORD_CONTENT_CREATOR_ROLE_ID = process.env['DISCORD_CONTENT_CREATOR_ROLE_ID'] ?? '101010101'
export const DISCORD_MODERATOR_ROLE_ID = process.env['DISCORD_MODERATOR_ROLE_ID'] ?? '101010101'
export const DISCORD_GUILD_ID = process.env['DISCORD_GUILD_ID'] ?? '101010101'
export const DISCORD_RULES_CHANNEL_ID = process.env['DISCORD_RULES_CHANNEL_ID'] ?? '101010101'
export const DISCORD_SERVER_BOOSTER_ROLE_ID = process.env['DISCORD_SERVER_BOOSTER_ROLE_ID'] ?? '101010101'
export const DISCORD_TOKEN = process.env['DISCORD_TOKEN'] ?? 'token'
export const DISCORD_TOKEN_USER = process.env['DISCORD_TOKEN_USER'] ?? 'token'
export const DISCORD_TOURNAMENT_ROLE_ID = process.env['DISCORD_TOURNAMENT_ROLE_ID'] ?? '101010101'
export const DISCORD_VOICE_LOBBY_CATEGORY_ID = process.env['DISCORD_VOICE_LOBBY_CATEGORY_ID'] ?? '101010101'
export const DISCORD_VOICE_LOBBY_CHANNEL_ID = process.env['DISCORD_VOICE_LOBBY_CHANNEL_ID'] ?? '101010101'
export const DISCORD_NEWCOMERS_CHANNEL_ID = process.env['DISCORD_NEWCOMERS_CHANNEL_ID'] ?? '101010101'
export const DISCORD_SURVIVOR_ROLE_ID = process.env['DISCORD_SURVIVOR_ROLE_ID'] ?? '101010101'

export const TWITCH_CLIENT_ID = process.env['TWITCH_CLIENT_ID'] ?? 'clientId'
export const TWITCH_CLIENT_SECRET = process.env['TWITCH_CLIENT_SECRET'] ?? 'clientSecret'

export const YOUTUBE_API_KEY = process.env['YOUTUBE_API_KEY'] ?? 'key'

export const SURVIVOR_BUTTON_ID = 'survivor-button-id'
export const TOURNAMENT_BUTTON_ID = 'tournament-button-id'
