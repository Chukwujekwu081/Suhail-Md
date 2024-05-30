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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_46_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk02L1ZIMXNDYmZzRVN6RzFDc0cvOExOVjFldnB0QXNZc1BGcEJCQnRzRVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzMDYzMDkyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTFDRjBBRUFCMUMxNkJDODI1Qjc0N0FCN0QyNjA4QzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDYyMzcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi10ZUx2T0FQUUI2N3AxU1ZBclZYQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTMxNzFjNWUtZDM0ZC00M2MyLWFlNTUtN2FlMDcxZThiZTY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTQwLFxuICAgICAgODEsXG4gICAgICAxNjIsXG4gICAgICAxODgsXG4gICAgICA2NSxcbiAgICAgIDIzMyxcbiAgICAgIDIyMCxcbiAgICAgIDIwNCxcbiAgICAgIDE1MyxcbiAgICAgIDExNixcbiAgICAgIDM2LFxuICAgICAgMjQ5LFxuICAgICAgMzAsXG4gICAgICAxNjEsXG4gICAgICA5OSxcbiAgICAgIDU5LFxuICAgICAgMTIzLFxuICAgICAgMTk5LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDc5LFxuICAgICAgMTQ4LFxuICAgICAgMTE5LFxuICAgICAgODksXG4gICAgICAyMTYsXG4gICAgICA5LFxuICAgICAgNyxcbiAgICAgIDIwMSxcbiAgICAgIDE5OSxcbiAgICAgIDEwMSxcbiAgICAgIDE0NixcbiAgICAgIDE1MCxcbiAgICAgIDIyMCxcbiAgICAgIDE0MyxcbiAgICAgIDEyLFxuICAgICAgMjQ0LFxuICAgICAgODIsXG4gICAgICAxODIsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlMzQlMxR0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzA2MzA5MjY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNodWt3dWpla3d1IFN0ZXBoZW5cIixcbiAgICBcImxpZFwiOiBcIjI2MjIzODIzNzYzMDY2MDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMV3l1OEhFTnVWNGJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEkrUHU2TDZoaGl0bW55bDFiTy9lSGZPWDEzQWRWRVFKeVU4ZTNCelZXbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqelJHVVI3ZVpjdW9NTEw3VFFBK3plekY4SUx2SERKTm5UV2ZLZU4yYjBWaHJ2Q3ExdmJ5cDNrWFc3aEhwaGlhYzF2YVE0eDlMTkFlZ0UvN0JhZmNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2MVFENlBEUHlKRk5tcnVDQjRYL2h0VE5aUHlUSXFDZXZXZVJZajdKampwUmdnbkN0cENiZkp3NFRqM01mM0tTVlQ3MTR5Y1RYMnNIVUg2eVRKVjlBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMwNjMwOTI2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzA2MjM2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5TclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlNyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzVoVjlCTVVQbDllYzl2amJzV0VxUGpUc3o5L3Z4dUVDcVcrdEtoNUNhaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTEzMDU1NTIxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3MDYyMzUyMTMzXCJ9Igp9"  // PUT your SESSION_ID 


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
