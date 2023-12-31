const fetch = require('node-fetch');

let handler = async (m, { conn, args }) => {
   let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "ඔබට කාබන් සෑදීමට අවශ්‍ය පෙළට අකුරු ඇතුළත් කරන්න හෝ පිළිතුරු දෙන්න!"
   if (!text) return m.reply('පෙළ ඇතුලත් කරන්න text') 
   try {
   let img = await fetch(`https://api.botcahx.eu.org/api/maker/carbon?text=${text}&apikey=${btc}`).then(res => res.json());
   await conn.sendFile(m.chat, img.result, 'img.jpeg', '', m)
   } catch (e) {
   throw `✖️ *Server sedang error!`
   }
}

handler.help = ['carbon']
handler.tags = ['maker']
handler.command = /^(carbon|carbonara)$/i
handler.limit = true
module.exports = handler
