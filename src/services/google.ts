import { youtube as youtubeAPI } from '@googleapis/youtube'

import { YOUTUBE_API_KEY } from '../configuration.js'
import type { ConnectedAccount } from './discord/DiscordClient.js'

export const youtube = youtubeAPI({
  version: 'v3',
  auth: YOUTUBE_API_KEY
})

export const getYouTubeSubscriberCount = async (account: ConnectedAccount): Promise<number> => {
  const channels = await youtube.channels.list({
    part: ['statistics'],
    id: [account.id]
  })
  if (channels.data.items == null || channels.data.items.length === 0) {
    throw new Error('No YouTube channels found')
  }
  const channel = channels.data.items[0]
  if (channel?.statistics == null) {
    throw new Error('No YouTube channel statistics found')
  }
  const { subscriberCount } = channel.statistics
  if (subscriberCount == null) {
    throw new Error('No YouTube channel subscriber count found')
  }
  return parseInt(subscriberCount, 10)
}
