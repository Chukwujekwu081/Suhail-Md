const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://jocktmpjfxea:JqirBpJ6Ij2ZNWUg@cluster0.jnoticj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348141877822";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_28_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpL0Q0ZEEvbjR5K2lyY0RDMGQvZ2d6a3JnUGF0dkFGZ0g3V3laNGViRzlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfaS1HdjlsMFNINnZXeGhFWVpVY0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJhMzM5MThiLWNhZGEtNDcwMS1iNTcwLTU5N2RkZjY3ZTBiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNDQsXG4gICAgICAxNTcsXG4gICAgICAxMDcsXG4gICAgICA0NyxcbiAgICAgIDUsXG4gICAgICA4NSxcbiAgICAgIDU1LFxuICAgICAgMTA2LFxuICAgICAgMjQ2LFxuICAgICAgNTksXG4gICAgICAxMyxcbiAgICAgIDE1NyxcbiAgICAgIDI2LFxuICAgICAgNjQsXG4gICAgICAxODQsXG4gICAgICAxNjIsXG4gICAgICAxNDMsXG4gICAgICA0NixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAxNzAsXG4gICAgICAxMDksXG4gICAgICAyMTcsXG4gICAgICAyNTUsXG4gICAgICAxNTcsXG4gICAgICA5OCxcbiAgICAgIDg0LFxuICAgICAgMjM0LFxuICAgICAgNzUsXG4gICAgICA0MCxcbiAgICAgIDE0OSxcbiAgICAgIDExNCxcbiAgICAgIDE2MixcbiAgICAgIDE1NixcbiAgICAgIDQsXG4gICAgICAyNDksXG4gICAgICA3MixcbiAgICAgIDk1LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxSN0ZXNTVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxNTgyNTQ0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDA2NTUxMjMzNzYzODoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLai9rcUVFRUx6RGdMTUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm94Q1pkdnQ1cWU1bFZwK042aXRTUmU2cjF2WW9oeGNGc0I5cDVYZis1Ukk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1VaeXU4VHF4QmRQTEJlMHo4czMwVEpZaHEwejYwM1R3OGRNa0lQbDBEcFBsN0lJMGZXVUs1eGNpb3BreUowcVFFWThlWEd5Y1lGVEgvY3kwQ0REQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0Z4UUU4MnRZZkZHSitSMi9pQWtlOFBRSHJMVXcwb3ZKY1k3N2wrUDNrQm55cysyZWNIUWM3VVkxSW5CdVhYNllCZXdaaUtVQWxMc3FpT3lMS0U0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTU4MjU0NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc1NzYxMjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
