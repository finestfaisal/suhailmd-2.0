const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,255749386037";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_17_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZQTjlmVFpYQjA0M1p1Z0E1VVFMZE16MkJTcyt5bnkyMG5Sc0cvQzVNNVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQ5Mzg2MDM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Qjk0QkM3MkMwMkY5NTI4QzFFRkJDM0U5ODc1OURGQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3ODM4MjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDkzODYwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3QjM3MjkxRTc4MDEwRUI2MUM1Mjk1QjE0MEQ3OTQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDc4MzgyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5ckJoZ2p5UFFCR3JrLWxtaUVuYm5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2N2M1Yzc4LTJlOTgtNDA3Zi1hZTJkLTQ5N2ExMTE2NzUzOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyMTMsXG4gICAgICAxOTEsXG4gICAgICA3MSxcbiAgICAgIDE4MCxcbiAgICAgIDIxMSxcbiAgICAgIDIwNCxcbiAgICAgIDQyLFxuICAgICAgMTcyLFxuICAgICAgMTY1LFxuICAgICAgOTcsXG4gICAgICAxMzQsXG4gICAgICAxNDMsXG4gICAgICAxNTcsXG4gICAgICAxMTAsXG4gICAgICAyNDMsXG4gICAgICAxNzUsXG4gICAgICAxMjMsXG4gICAgICAyNCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxNzEsXG4gICAgICA5NCxcbiAgICAgIDI0MixcbiAgICAgIDYxLFxuICAgICAgMTExLFxuICAgICAgMTQzLFxuICAgICAgOTYsXG4gICAgICAyOSxcbiAgICAgIDE2MyxcbiAgICAgIDE5NCxcbiAgICAgIDEyOCxcbiAgICAgIDU3LFxuICAgICAgNTIsXG4gICAgICAyMjcsXG4gICAgICAxMTYsXG4gICAgICA2NCxcbiAgICAgIDE1MCxcbiAgICAgIDY1LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1pWR1pGTlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0OTM4NjAzNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg2MjMyOTE5ODE4NjQ6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGYWlzYWzihKJGaW5lc3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMnl4NElGRU1yVXBya0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVSMGExM0loWXduZzNjZWlSWU5aSlhFekpjY1kvWkFFS1NqWWNPSldpaWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHFTVTBUSTNmZEw2bnAwb3dwUnhGZjNSU0sxdnZkZjV5eVpYYjcxQVVqMml1TFppSzc2WjRBTHpPcE5Gc0dvVHJ3am1NYXdxaXRwQTl3UStONEUyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNHpocXFlMGpZS2lmYlBCQm12VERmaEFnL3FFOHJER0FST3hlVzcvNGlYTERVcjYxWjZkY00vNnJsbVJnMWJWd0E3VGNudjBJZ2hCc2s1MU1ocU1sRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ5Mzg2MDM3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc4MzgyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdYb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1hvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0dQOTlUeUhRei9paVFjcjhob0tWVUlCdGFSL05LTjFhU0VLUGgxVU5EVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ3NTQxMzA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3NjA3NDA5MDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
