const { Telegraf } = require('telegraf')
const config = require('./config.js')

const db = require('./utils/db.js')
const ai = require('./utils/ai.js')

const bot = new Telegraf(config.botKey)

bot.on("message", async ctx => {
    const message = ctx.message.text.split(" ")

    await db.request(`INSERT INTO users(id, name) VALUES($1, $2) ON CONFLICT(id) DO NOTHING`, [ ctx.from.id, ctx.from.first_name ])

    if(message[0] === '/ai') {

        const res = await ai(message[1])
        ctx.reply(res)

    }
})

bot.launch()