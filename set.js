
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEFAkIiOWEAaULl5Q93YhxIKKORmUag44b9v0D09PQ+7s708FVkZmSdPnlPfQVnhBi1QB+TvoCb4Cinqj7SrEZCB2sYxImAIIkghkMHYasdqsU1mzmmxnFpnZC+xowUZD+dterooxWYwd3SxiHfJC3gOQd2echz+piAXn0JbFFxtZxvFSfGPUuE+AknymIpzF+XWO5oxvbxqD+78Ap59RYgJLhO9TlGBCMwXqPMgJl+Dv/b8IxeKcLIY5dexq4+rcTpHioNNMS/TK06Izm6Wq1XJbL8G/7Iqqs2gzm72RRoNklY9IEUgt8bk7wOBZ5nidjztutbO98k7/AYnJYqsCJUU0+7LvLuKqA/sHD3m0mAnxBzNBswofo35BXczMJs5PsrXSuHeGf9rwM2Z6qhzk+n4Oi2ge5rML/7D9oJsqYk62kyYkIam5T4E9vYrcI98aOX8f3if6B2zGN/cSeC5tsq4C/wwjg+qCpnQZU5gzNfouCsQYffM1+CLyF76mRBHbKHmy2t1Nkz0utNm5S0JCz+K5xrWpZyXIl/6hA9pS36HMr0ixpgprxdpgByyWmq5xJloUk7vLVS4gzV9KIERQzdd+vpl2cRikGy9AwxjVecJJ0RaBWuJCybWEi/E7DrfkzDSlJe3ic6osyIgs88hICjBDSWQ4qrsY/wQwOi6RiFB9I1cUGwzthAcZ6BVts7bp0UmPUwjtELD9BZzphUasjvOBqODfngBQ1CTKkRNgyITN7QinY2aBiaoAfKffw1Bie70fW19M44dghiThm7Lts4rGH3s9OMShmHVlnTdlaHWHxABMvMZRpTiMml6FtsSkjDFV6SlkDZAjmHeoJ/zIYIiIFPSop+e1aqop50xZ1PTmy3AEBRv68BR/7IIvDiZTkSRYwRZkP5ovt36srCuv5WIgiHI39I4jh1zPCMJU44RxT6xjz9/AuzrRYhCnDdABpp7DR5UMXVbVBnbMgzllihaooDPgT508c68aDqSYJDGjTE7aKuKE48qOsab9SrTj206mqfb+riCxOf8l38oAmSgjCi/7UanqTIpjLVrHM5VbavxyrH2ae3gO4fZdM9EjY2NQGjgBTLUYg7jzEn9veSzq+KQs9JjEx3XVvp60uEouqWq/9J3i9AVh+jXZsGaeOvZGLr+rhqHNr3dR8pts8FivT1XLPQ2HGH1KMzIIUx3V959qDNtrQsk7Dp23GTidT0273VzKyOWQdIZYrKZKMm7Yt8ck/94qfCbmvpV9b8xRm/GL2G/wP9e3TvwXmHMc/hLjR9Pyb/YUUX3R+yuLuKs5GlMLgtnMPb3xZ5hzoe7cari7rBbBNvgwjgMeD7/GoI6hzSuSAFkAMuIVDgCQ0CqtpesVcbVb5ppqmV9eDWHDVU+bbDBBWooLGogs6LAcDwnTYX3LI9UtQmbFMjAC86C2ku6U+p6TSH9MBVQ+k8f1OD5N7P0mwpuBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254788409105", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254769677305", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "V",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "delete", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "inbox", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "typing", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
