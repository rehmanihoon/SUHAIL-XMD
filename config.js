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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_46_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkk0V2JuRmxiZzVSeXYxbUdydzdXSlgwWW1DdHRweVBMRVVkekNvWEJsa3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9HZF9TaEh3UUl1eGU0ZkNFWDNsTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzRkODY0YTAtM2I4OS00MGRjLWFkMTgtYWJhZjI4NGU2MDFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDIzMCxcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDIyMSxcbiAgICAgIDE4NCxcbiAgICAgIDczLFxuICAgICAgODMsXG4gICAgICAxMzQsXG4gICAgICAyMzgsXG4gICAgICAyNDAsXG4gICAgICAyMzMsXG4gICAgICAzLFxuICAgICAgMTMsXG4gICAgICAyNDAsXG4gICAgICAxOTEsXG4gICAgICAxMDIsXG4gICAgICA5NixcbiAgICAgIDQwLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgNDAsXG4gICAgICAyLFxuICAgICAgNzIsXG4gICAgICAxNzIsXG4gICAgICAxNTgsXG4gICAgICA4OSxcbiAgICAgIDE0LFxuICAgICAgMTQ4LFxuICAgICAgMjQxLFxuICAgICAgMTE0LFxuICAgICAgMTQ1LFxuICAgICAgMzksXG4gICAgICAyMDksXG4gICAgICAxNDAsXG4gICAgICAyMzksXG4gICAgICAzMixcbiAgICAgIDIwMixcbiAgICAgIDIyNixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA2TDRYS1dRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTIwMDQ2MDA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCSUdHIEJPU1NcIixcbiAgICBcImxpZFwiOiBcIjg1ODU2ODE1NzE0MzEwOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thNnpOc0hFUDdRb0xjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSkxHb0ViQ0czU2dtRUM0UHZBd2FscERlTU5IY0RCQmM0TXVDU3d0aXNIVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJTXVvRURVb3dBa1pNTGtuNWhnaWZUUVhXOTJ1MXBhT09pOE1NaXVvdjUyVmswbEdSdTVnNWp2NDlCZzhJbjc2ZFUzOUdOQXlBdFR2dkwxcE1iRHhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIYkpnTTZYQiszK256YnZNWldQM0p2YnpCMzhwVElaa0dxc0M5R2NCT0VrOENnemxjMjNhQjNoR3JjbklsWjZTSGpGbjV1TVNoVkY2aWlNcUNoLzRoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTIwMDQ2MDA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjQ5MDc1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtiZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2JlLmpzb24iOiAie1wia2V5RGF0YVwiOlwicXNJalo3RW85cEZFUG5aNkxJMUppemw0N3hyOVA5dDJDaFZQT2Jia3RXbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcxMTQxNjY4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
