import fetch from 'node-fetch'

let handler = async (m, { text }) => {
   if (!text) return m.reply('Ingrese un Texto')
   let res = await fetch(`https://apis-starlights-team.koyeb.app/starlight/chatgpt?text=${text}&apikey=tamvan`)
   let json = await res.json()
   await m.reply(json.data.data ? json.data.data.trim() : json.data.message)
}

handler.help = ['chatgpt']
handler.tags = ['tool']
handler.command = ['chatgpt']

export default handler
