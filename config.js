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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_11_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYm4rR3V2V2JzVENDL3d3ejllL2d2blZOSmNteDNuNURYMFgvdmlsb0xORT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRHk0a0dNakZURHVnNUZWaUNZRHBFd1wiLFxuICBcInBob25lSWRcIjogXCJmMjYwOTI0OS00NmFhLTQ1NzEtOGFjOC1kZDNhMjU5MTA0MGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTgyLFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICA2NCxcbiAgICAgIDE0LFxuICAgICAgMTA2LFxuICAgICAgNDAsXG4gICAgICAzMixcbiAgICAgIDE3NixcbiAgICAgIDE2NSxcbiAgICAgIDEyNCxcbiAgICAgIDEwOCxcbiAgICAgIDY4LFxuICAgICAgMTk2LFxuICAgICAgMTQwLFxuICAgICAgMjI1LFxuICAgICAgMTY3LFxuICAgICAgMTA0LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgMTAwLFxuICAgICAgNDksXG4gICAgICA4MCxcbiAgICAgIDY5LFxuICAgICAgMTUwLFxuICAgICAgMTkwLFxuICAgICAgMjE1LFxuICAgICAgMjIsXG4gICAgICA2OSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MyxcbiAgICAgIDE3LFxuICAgICAgMTAyLFxuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgMjMxLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYxUDE2RkgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE3ODk1NzQzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2aq/CdkJjwnZqr8J2atPCdmq/wnZCK8J2ar/CdkInwnZqwIPCdkIrwnZqw8J2QmPCdmq/wnZq78J2aq/CdkIrwnZqrXCIsXG4gICAgXCJsaWRcIjogXCI1NDg5MDE1MTgxMzMzNjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZUluc2dDRUphMmdyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZxNjlzMmpkUjR2L2F0V3VKU3IySHg5dkhLbnU2QWNxQjdTZStmWEJNeDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmNKbXNEZWlINHNhaTZnS1hFbDMwYWpPNE5xYlYxRE9hRVZJYjJDOU1KSkZBc1hvV2p3Zm52VFB2d3lCeHJMRXdzSTZTdS9aS0F4TnpkeXFTUzRjREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibzhBbkkrWlhYaTJTV3BuNkxxcnRMbkthNnluTzJGeVR4VHZVWkJsY1M0bDNIeGd3RWpXQlZkdm13Ui9ScUNtWFd6MHBkYVk3d2gxNW83YjVQNUIrQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNzg5NTc0MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODAxNDk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQlQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQMnY5aldoZnl5Q3ZDL3ovR2JVNm9JSUpOS045NnZiTW5rbjBRU0dLTjNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4ODM1ODQzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzk4MjUyMDU0XCJ9Igp9"  // PUT your SESSION_ID 


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
