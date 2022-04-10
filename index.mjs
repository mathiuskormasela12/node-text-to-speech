import { gTTS as GTTS } from 'simple-gtts'

async function start () {
  try {
    await GTTS('여자친구', {
      lang: 'ko',
      path: './voices/record.mp3'
    })
  } catch (err) {
    console.log(err)
  }
}

start()
