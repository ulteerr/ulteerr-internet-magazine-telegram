require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const webAppUrl = '/'
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка, заполните форму', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Сделать заказ', callback_data: 'make_order' }]
                ]
            }
        });
    }
});

bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;
    if (data === 'make_order') {
        // Обработка нажатия кнопки "Сделать заказ"
        // Здесь можно добавить дальнейшую логику
        await bot.sendMessage(chatId, 'Вы нажали кнопку "Сделать заказ"');
    }
});
