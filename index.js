const axios = require('axios');
require('dotenv').config();  // Load environment variables from a .env file

// Replace or fill the env file with your TELEGRAM_BOT_TOKEN
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Replace with your API URL
const API_URL = process.env.API_URL;

// Function to make the query
async function query(data) {
    try {
        const response = await axios.post(API_URL, data, { //Replace the API_URL or fill the env file
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`, // Replace the API_TOKEN or fill the env file
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error in the query:', error.message);
        throw error;
    }
}

// Function to handle Telegram messages
async function handleTelegramMessage(message) {
    const chatId = message.chat.id;
    const text = message.text;

    try {
        // Log for incoming message
        console.log(`Incoming message: ${text}`);

        // Make the query with the user's message
        const result = await query({ question: text });

        // Extract the text from the JSON response
        const responseText = result.text || 'Could not retrieve response text';

        // Log for outgoing message
        console.log(`Response: ${responseText}`);

        // Send the response to the Telegram chat
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: responseText,
        });
    } catch (error) {
        // Handle errors
        console.error('Error handling Telegram message:', error.message);
    }
}

// Configure the Telegram bot
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Handle Telegram messages
bot.on('message', handleTelegramMessage);

// Startup message
console.log('Telegram bot started. Waiting for messages...');
