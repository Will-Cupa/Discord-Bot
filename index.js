const { Client, GatewayIntentBits } = require("discord.js");
bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
bot.login(
"Discord bot Token",
);

bot.on("ready", () => {
  console.log("Bot logged in");
});

bot.on("messageCreate", (message) => {
  let nbQuoi = (message.content.match(/quoi/g)||[]).length;
  for (let i = 0; i < nbQuoi; i++) {
    message.channel.send("feur");
  }
});

