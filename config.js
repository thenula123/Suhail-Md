const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_49_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1Gak52TDlKY2svblVhYVNuelZaWXlsZmtWRDFnNThQWldlM1BrR1Radnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDE5NDk1MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBNzY4ODkwN0JGMEVFQkRCMTIxRUFDNzBERDU5NzE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg2OTM4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAxOTQ5NTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Q0VCMTgzNUI4QTU0N0ZCOUJDNkZGODU0NzQ2NzA5RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4NjkzODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMTk0OTUwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMURCREM3NjFGRTVCRTQyRkU4NTkxQUI2N0UwODM1RkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODY5Mzg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDE5NDk1MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZBOTE3NzEyOEU3RjQ1RUQyNUVCQzZDNkU5OUFBNTE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg2OTM4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBbDNhdlJDeFNzU0lnTmhFdElTLWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4YTZiNWEwLWJiOTktNDdhMS1iMDZjLWQ4ZDE2YmY3Mzg1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDg4LFxuICAgICAgOTAsXG4gICAgICAyMjUsXG4gICAgICA1NSxcbiAgICAgIDM5LFxuICAgICAgMzEsXG4gICAgICAyMDgsXG4gICAgICAyNTQsXG4gICAgICAxNjgsXG4gICAgICA4MSxcbiAgICAgIDE3NyxcbiAgICAgIDE5OCxcbiAgICAgIDE1OCxcbiAgICAgIDMwLFxuICAgICAgMTg2LFxuICAgICAgNDEsXG4gICAgICAxMTgsXG4gICAgICAxODEsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDI0OCxcbiAgICAgIDE0MSxcbiAgICAgIDI2LFxuICAgICAgNTcsXG4gICAgICAxNzIsXG4gICAgICAyMzgsXG4gICAgICAyNTUsXG4gICAgICAyMjYsXG4gICAgICAxNSxcbiAgICAgIDIwNSxcbiAgICAgIDc3LFxuICAgICAgNzYsXG4gICAgICAxNjAsXG4gICAgICAzNixcbiAgICAgIDE3NyxcbiAgICAgIDE0MixcbiAgICAgIDcsXG4gICAgICAyMTksXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQNjZSUVFnODNEdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFVjZ3dwRzR6L1ZtQ0owVWFtN3l2S2RxZ0VqRzVoVXNDc0ExbDVVZ3ZqZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1am1teUExUmRtRmh5SGdpM1NveU1rWTNvMmNwazlJclN0eFA3U0c2ejQwTnVzVld2a3ozQmcrVHpqNlo2eW00QnJ0cmdiTzZ0N1oyYzlUemhWVDFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoaXFXZ2JGQXlHMldCSE5tSldWZUhtSnJKd0dOanE4TWlTT3JKKzk0V1JSWFREaWRObE9aLy9hK1lqN3NZRDJaRjV3Nnc5TmpCdU9HeTJMMzVsd3hpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzAxOTQ5NTA3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1MTYzOTc2MjkwNDA5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwibmlyYW5qYWxhc2FuamVld2FuaTExM1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDE5NDk1MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg2OTM4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWldkR005OVF6LzN5TzNNb0I3Mjg1TDhoa3FqaC9DWWJESGh4ZVhpUERvcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzY3OTAyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyODY5MzgzODk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
