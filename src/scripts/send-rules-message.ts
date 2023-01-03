import { EmbedBuilder } from '@discordjs/builders'
import { roleMention, channelMention, Routes, bold, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

import {
  DISCORD_ADMINISTRATOR_ROLE_ID,
  DISCORD_BOT_COMMANDS_CHANNEL_ID,
  DISCORD_CONTENT_CREATOR_ROLE_ID,
  DISCORD_MODERATOR_ROLE_ID,
  DISCORD_RULES_CHANNEL_ID,
  DISCORD_SERVER_BOOSTER_ROLE_ID,
  SURVIVOR_BUTTON_ID,
  TOURNAMENT_BUTTON_ID
} from '../configuration.js'
import { discordRest } from '../services/discord/DiscordClient.js'

const SOTF_LOGO_URL = 'https://i.imgur.com/0MQfYFW.png'
const DISCORD_RULES_IMAGE_URL = 'https://i.imgur.com/4UqeLih.jpg'

await discordRest.post(Routes.channelMessages(DISCORD_RULES_CHANNEL_ID), {
  body: {
    content: 'discord.gg/playSOTF',
    embeds: [
      new EmbedBuilder().setImage(SOTF_LOGO_URL),
      new EmbedBuilder()
        .setTitle('Hello Survivors and welcome to the ARK: The Survival Of The Fittest Community Discord server!')
        .setDescription(
          `
ARK: The Survival of the Fittest is a Multiplayer Online Survival Arena (MOSA) game that pits many combatants against one another in the struggle for survival in a harsh, changing environment packed with deadly creatures, and are ultimately pushed into an epic final showdown where only one "Tribe" will make it out alive.

This is your destination to discuss all things about TSOTF, stay up to date with the latest news, and find other players to play with and most importantly, have fun!
`
        )
        .setFields(
          {
            name: bold('Roles'),
            value: `
${roleMention(DISCORD_SERVER_BOOSTER_ROLE_ID)} :  Server Boosters - Boost the server to get this role and we're grateful for your support!
${roleMention(DISCORD_CONTENT_CREATOR_ROLE_ID)} : Content Creators - Use the \`/content-creator-role\` command to get this role.

Commands should be executed in the ${channelMention(DISCORD_BOT_COMMANDS_CHANNEL_ID)} channel.
`
          },
          {
            name: 'Voice Channels',
            value: `
${bold('•')} The voice channels are ${bold('self-moderated')}.
${bold('•')} You can create your ${bold('own voice channel')} by joining the \`Lobby\` voice channel.
You will be granted ownership of a new voice channel that you can rename and manage (only possible with 2FA enabled).
${bold('•')} Voice channels will automatically be deleted if the channel is empty.
`
          },
          {
            name: bold('Links'),
            value: `
${bold('•')} [ARKCountdown Twitch](https://www.twitch.tv/arkcountdown)
${bold('•')} [TeamSOTF Twitter](https://twitter.com/TeamSOTF)
${bold('•')} [ARK2News Twitter](https://twitter.com/ARK2News)
${bold('•')} [ARK: Survival Of The Fittest Steam page](https://store.steampowered.com/app/407530/ARK_Survival_Of_The_Fittest/)
            `
          }
        ),
      new EmbedBuilder().setImage(DISCORD_RULES_IMAGE_URL),
      new EmbedBuilder()
        .setDescription(
          `
We want everyone to enjoy their time in the community, so we've laid down a few rules to keep this server a safe and positive environment for all.

These rules will be enforced by our team of ${roleMention(DISCORD_ADMINISTRATOR_ROLE_ID)} and ${roleMention(
            DISCORD_MODERATOR_ROLE_ID
          )} volunteers, so please read them carefully and adhere to them at all times, and follow the direction of our moderation team. Failure to do so could result in a mute or ban.`
        )
        .setFields({
          name: bold('General Rules:'),
          value: `
${bold('•')} Use common sense.
${bold('•')} The primary language of this server is English.
${bold('•')} Do not publicly accuse other users/players of misconduct.
${bold('•')} Do not spam messages, images, emoji, commands, and @mentions.
${bold('•')} Trading, selling, begging, boosting and account sharing are not allowed.
${bold('•')} Aggressive or 'toxic' behaviour is forbidden.
${bold('•')} Multiple accounts are not permitted.
${bold('•')} No posting content related to piracy, cheats, cracks, exploits along with NSFW.

The following documents are also strictly enforced:
  • ${bold('[Discord Community Guidelines](https://dis.gd/guidelines)')}
  • ${bold('[Discord Terms of Service](https://dis.gd/terms)')}
        `
        }),
      new EmbedBuilder()
        .setColor([220, 148, 22])
        .setDescription(bold(':warning: To access the community channels, after reading and agreeing to the rules, click on the button below to receive the Survivor role.'))
    ],
    components: [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(SURVIVOR_BUTTON_ID).setEmoji('✅').setLabel('I am a survivor and accept the rules!').setStyle(ButtonStyle.Primary),
        new ButtonBuilder().setCustomId(TOURNAMENT_BUTTON_ID).setEmoji('<:dodowithit:1055076101728247829>').setLabel('I want to participate in tournaments!').setStyle(ButtonStyle.Secondary)
      )
    ]
  }
})
console.log('Successfully sent rules message.')
