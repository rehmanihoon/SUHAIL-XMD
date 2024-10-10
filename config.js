const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923151976886";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_23_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZNUcranlWYytEUS84bG93dmZJMTFJVE9Bd05DR1hPei9XTFZGTGNzcWtRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE1MTk3Njg4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkVDOEVERjE3MDNFQ0VCRjlDOEMzQzJBN0I5RTNEOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NTU5NDA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFFczBFWlRkUWhDWHp6LTBrU1BvWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTZmNTRkNzEtM2RhZC00NTA2LTgzMzktNDM0N2ZkNjZkMDJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDksXG4gICAgICAxMTYsXG4gICAgICA3NixcbiAgICAgIDE3MSxcbiAgICAgIDk3LFxuICAgICAgMjQ5LFxuICAgICAgMjAwLFxuICAgICAgMTUwLFxuICAgICAgMjAsXG4gICAgICAxNTksXG4gICAgICA5MCxcbiAgICAgIDIyMSxcbiAgICAgIDIxOSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NSxcbiAgICAgIDE5NixcbiAgICAgIDEzMSxcbiAgICAgIDIzMyxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDIzNixcbiAgICAgIDQxLFxuICAgICAgMTksXG4gICAgICA4NSxcbiAgICAgIDE5LFxuICAgICAgMjU1LFxuICAgICAgMzEsXG4gICAgICAyNTMsXG4gICAgICAyOSxcbiAgICAgIDE1NyxcbiAgICAgIDE5NixcbiAgICAgIDE5NCxcbiAgICAgIDgwLFxuICAgICAgNjIsXG4gICAgICA1NyxcbiAgICAgIDE2NSxcbiAgICAgIDk1LFxuICAgICAgMTY3LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpEOEJDSk5GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNTE5NzY4ODY6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDQyNDUwOTQ0NDM0NDo2NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJiaGFpYW1hYW4yNzVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWEM1cjBDRUtmeW5yZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZ2MzcxaXptL1dZZXlRN0w0ZlFVKy83RmxLeTBjRW9mR0tjc1hrQWJKQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejhkNFpFY3lDaEphaFkxdmpEVVBmdTBZZ0MxMStpcVdYZG12bGo2S29veituSERnUzBRK2p3NHZLMDFXdFFTMDB2VUkyTVRXbmJKUjd3MXhCc2xKQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOTlLQ3BEMVgzNnc3QkJCY05LV1U0RHRzYU5lSkVpQW5rSVpDMit5bm9QWkZDMlRhU1pMNm9WbUgwT3VXUEsyTFRyU01KUjBXSnFIY3pQc0JnV1pBQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTUxOTc2ODg2OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODU1OTQwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFxTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXFNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaDMvT0JsZlRxVnVyT0JCR3drWTJIQnFXdmRoUVZMeHpBbEZhWE9rR2tFRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjY0NzY4NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODQ5NTY2NTEwM1wifSIKfQ=="  // PUT your SESSION_ID 


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
