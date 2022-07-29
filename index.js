const { Client } = Discord = require('discord.js-selfbot-v13');


let client = global.client = new Client({
    intents: [32767],
    checkUpdate: false,
    patchVoice: true,
    autoCookie: true,

})

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', async (message) => {
    let args = message.content.substring(["."].some(x => x.length)).split(" ");
    let cmd = args[0].toLocaleLowerCase()
    args = args.splice(1);

 
    if(cmd == "play") {
        if(!args[0]) return message.reply("Url at yarram")
        if(!args[0].includes("youtube.com")) return message.reply("Attığın URL youtube URL'si olmalı!");
        const groupDM = client.channels.cache.get(message.channel.id);
        await groupDM.setName('Axioma ile müzik zamanı');
        await groupDM.send('Müzik oynatılmaya başlanıcak.');
        message.reply(`Senin o güzel gönlün için müziği oynatıyorumm`)
        const baglanti = await groupDM.call()
        const play = require('play-dl');
        const {
            createAudioPlayer,
            createAudioResource,
        NoSubscriberBehavior,
        } = require('@discordjs/voice');
        let stream = await play.stream(args[0]);
        let resource = createAudioResource(stream.stream, {
            inputType: stream.type,
        });
        let player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Play,
            },
        });
        player.play(resource);
        baglanti.subscribe(player);
    }
    
})
client.login(""")