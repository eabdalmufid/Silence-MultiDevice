let handler = async(m, { conn }) => {
  const sok2 = `6287787369563@s.whatsapp.net`
  const sok3 = `6287734910547@s.whatsapp.net`
  const sok4 = `62895411954396@s.whatsapp.net`
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6289631008798@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `AngelDark`, `๐ Developer BOT`, `๐ซ Don't call Developer`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://linktr.ee/whatsappbotz`, `Just Try!!๐ช`],
    [`${sok2.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp ๐ฃ`, `๐ต Don't Spam/Call me ๐`, `Nothing`, `๐ดโโ ๏ธ Asia!`, `๐ https://linktr.ee/whatsappbotz`, `Hanya bot biasa yang kadang suka eror!!`],
    //[`${sok3.split('@')[0]}`, `Kyami`, `๐ Team Developer BOT`, `๐ซ Don't call Owner`, `alvinrinegar@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://github.com/ShionMDv/`, `Just Try!!๐ช`],
    [`${sok4.split('@')[0]}`, `Smileyใ`, `๐ Team Developer BOT`, `๐ซ Don't call Owner`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://linktr.ee/whatsappbotz`, `Just Do It!!๐พ`],
  ], fkontak) 
}
handler.help = ['ownerr']
handler.tags = ['info']
handler.command = /^(ownerr)$/i

export default handler 
