const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let hunterk = await data.get(msg.author.id)
        
        if (hunterk === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("j4j \n https://discord.gg/dbdjs") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(4500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", hunter => {
  sleep(1000);
  if (
    hunter.id=== "" ||  //En üste bundan ekleyerek sw sayısını arttırabilirsin
    hunter.id===""   ||
    hunter.id === ""
  ) {
    
  } else {
    hunter.join();
  }
  });


client.on("ready", () => {
      setInterval(() => {
       let hk = client.channels.get("812239006506680341") // j4j sunucusunun kanal id'si


       hk.send("J4J DM ")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let hk = client.channels.get("853294000924393532") // j4j sunucusunun kanal id'si


       hk.send("J4J DM ")


      }, 30000);
})


client.login(process.env.t) // user tokeniniz .env ye "t" isimli varible açın
