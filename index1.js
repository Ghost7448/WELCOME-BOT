const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
    console.log(`${client.user.tag} جاهز`);

    try {
        const channel = await client.channels.fetch('1490212603165937795');

        const embed = new EmbedBuilder()
            .setColor('#2B2D31')
            .setTitle('📜 Assassin Store Rules')
            .setDescription(`
## 1. No Swearing
Swearing in all its forms is prohibited in the server, in voice or text channels.
يُمنع السب بجميع صوره في السيرفر , سواء صوتيا او كتابة

## 2. No NSFW Content
It is not allowed to post (or hint) NSFW content under any circumstances.
يُمنع نشر ( او تلميح ) لمحتوي مخل تحت أي ظرف من الظروف

## 3. No Links
It is not allowed to put links for other Discord servers (or links in general).
لا يسمح بوضع روابط لـ سيرفرات اخري (أو الروابط بشكل عام)

## 4. No Racism
Racism in all its forms is prohibited.
تمنع العنصرية بجميع صورها

## 5. Politics & Religion
Talking about politics or religion is not preferred if it bothers the members included in the conversation.
الحديث عن السياسة أو الدين لا يفضل إذا كان مزعج للأعضاء المشتركه بالمحادثة

## 6. No Unnecessary Pings
Don’t ping without a legitimate reason. This includes pinging staff. Troll pings = time out.
يمنع المنشن بدون سبب مبرر و هذا يشمل منشن الستاف. فاستعمال المنشن بطريقه سيئه قد يؤدي للعقوبة

## 7. Use Bot Commands in Their Channels
It is not allowed to use bot commands in any text channel that is not intended for them.
لا يجوز استخدام أوامر البوتس في اي تشانل باستثناء التشانلس المخصصه لهم
`)
            .setImage('https://i.postimg.cc/g2S9yJSq/file-00000000071071f482e5b9cfefa85b2f.png')
            .setFooter({ text: 'Assassin Store • Rules' });

        await channel.send({ embeds: [embed] });

        console.log('تم إرسال القوانين');
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.TOKEN);
