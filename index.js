require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

// ===========================
// الإعدادات
// ===========================

const WELCOME_CHANNEL_ID = "1473069809368432852";
const RULES_CHANNEL_ID = "1490212603165937795";

// ===========================
// دخول عضو جديد
// ===========================

client.on("guildMemberAdd", async (member) => {

    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    const embed = new EmbedBuilder()

        .setColor("#f1c40f")

        .setTitle("🎉 أهلاً بك في عالم 𝘼𝙨𝙨𝙖𝙨𝙨𝙞𝙣𝙨 ")

        .setDescription(`
💙 أهلاً وسهلاً بك يا ${member}

━━━━━━━━━━━━━━━━━━

👤 معلومات عضويتك

📝 الاسم:
\`${member.user.username}\`

🆔 ID:
\`${member.user.id}\`

📅 تاريخ الدخول:
<t:${Math.floor(Date.now() / 1000)}:F>

━━━━━━━━━━━━━━━━━━

📋 القوانين المهمة

✅ اقرأ جميع القوانين قبل البدء  
✅ احترم جميع الأعضاء  
✅ لا تشارك محتوى مزعج  
🎉 استمتع بالمجتمع

━━━━━━━━━━━━━━━━━━

🌟 نصائح للبدء

1️⃣ اضغط على زر "قراءة القوانين"  
2️⃣ استكشف القنوات المختلفة  
3️⃣ تعرف على الأعضاء الآخرين  
4️⃣ استمتع داخل السيرفر

━━━━━━━━━━━━━━━━━━
`)

        // صورة العضو (فوق يمين)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

        // الصورة الكبيرة
        .setImage("https://i.postimg.cc/cLnwh6Vy/file-00000000071071f482e5b9cfefa85b2f.png")

        // الفوتر + الصورة الصغيرة (شمال تحت)
        .setFooter({
            text: "نتمني لك وقتا رائعا معنا | 𝘼𝙨𝙨𝙖𝙨𝙨𝙞𝙣𝙨 𝙁𝙖𝙢𝙞𝙡𝙮",
            iconURL: "https://i.postimg.cc/SQg6NBWr/download.gif"
        })

        .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("rules_button")
            .setLabel("📖 قراءة القوانين")
            .setStyle(ButtonStyle.Secondary)
    );

    channel.send({
        content: `${member}`,
        embeds: [embed],
        components: [row]
    });

});

// ===========================
// زر القوانين
// ===========================

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isButton()) return;

    if (interaction.customId === "rules_button") {

        await interaction.reply({
            content: `📜 توجه إلى روم القوانين: <#${RULES_CHANNEL_ID}>`,
            ephemeral: true
        });

    }

});

// ===========================
// تشغيل البوت
// ===========================

client.login(process.env.TOKEN);
