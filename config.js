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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 907 538 6711";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_08_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCSEFBVjA5bVJkN1NiRnNxRXJTak93YTVicEk0Z0RMdkF4alhRbDdOdCt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2SG1OSDBFMFNPS1Q0c3p2OVZvc1lnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4Y2ZhMTUzLTNkZWItNDJmNC1hMmJmLTNhNzQxMmFiNmI4MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICAyMzQsXG4gICAgICAyNDQsXG4gICAgICAxMTksXG4gICAgICAyNTAsXG4gICAgICA1NCxcbiAgICAgIDI0OSxcbiAgICAgIDIxOSxcbiAgICAgIDIzMixcbiAgICAgIDE4MCxcbiAgICAgIDQyLFxuICAgICAgNSxcbiAgICAgIDEzMSxcbiAgICAgIDM1LFxuICAgICAgMjM0LFxuICAgICAgMjU0LFxuICAgICAgMTg4LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgNDksXG4gICAgICAxMDIsXG4gICAgICAxODIsXG4gICAgICA5NyxcbiAgICAgIDI1NCxcbiAgICAgIDE1MSxcbiAgICAgIDE2OSxcbiAgICAgIDExNixcbiAgICAgIDI4LFxuICAgICAgMjU1LFxuICAgICAgMTk3LFxuICAgICAgODAsXG4gICAgICAyMTYsXG4gICAgICAxOTgsXG4gICAgICA5NSxcbiAgICAgIDI0OSxcbiAgICAgIDI1MSxcbiAgICAgIDU1LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhIOVc0RzJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc1Mzg2NzExOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDE0MjM2ODcxMDgwMzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09EZTFmRUJFT2kxcXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV3YxWklVK00vdUdlcStJcnhEektvZFZoaEdBckNVL0cxSUFnU3JGR2JEST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCeEl5UWdtZWtrRlQrTTRjeTY0dnpxQ21jaUFlWFN4ZndMQVF1YmxBZDFlOXV0SVR2a1I2bmhmQm1MSXhxRk1TZExvRFROTHArYWFEbWRuR1VvSEJCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJbjhNOFRhSjdub2FkWS9MMjU5M0NBaExydDU0OVN6MWpRZkNuek5wUWZRS282N21FcDhyQUNmYUU3T0JRSG44bXRQR0JHK0crQ3FndGxNcTg1M25BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc1Mzg2NzExOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI2MjUwOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
