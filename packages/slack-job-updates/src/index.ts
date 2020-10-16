import * as core from '@actions/core'
import {WebClient} from '@slack/web-api'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
    const channel: string = core.getInput('channel')

    const web = new WebClient(token)
    core.debug(`Posting to ${channel}`)

    const text = 'Build starting'

    await web.chat.postMessage({channel: `#${channel}`, text})
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
