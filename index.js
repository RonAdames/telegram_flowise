const axios = require('axios');
require('dotenv').config();  // Load environment variables from a .env file
const TelegramBot = require('node-telegram-bot-api');

// Telegram bot token (replace it with your own token)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// API URL
const API_URL = process.env.API_URL;

// Function to make the query
async function query(data) {
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`,
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
        const escapedResponseText = responseText
          .replace(/-/g, '\\-')
          .replace(/[\.|!|#|(|)]/g, '\\$&'); // Escape dot (.), escape (!) and hyphen (-) characters


        // Log for outgoing message
        console.log(`Response: ${escapedResponseText}`);

        // Send the response to the Telegram chat
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: escapedResponseText, // Use the escaped response text
            parse_mode: 'MarkdownV2', // Try using MarkdownV2
        });
        console.log(`Sent response to Telegram chat ${chatId}`);
    } catch (error) {
        // Handle errors
        console.error('Error handling Telegram message:', error);
        console.error('Error details:', error.response? error.response.data : null);
    }
}

// Configure the Telegram bot
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Handle Telegram messages
bot.on('message', handleTelegramMessage);

// Port to listen on (uses the port defined by the PORT environment variable or defaults to port 3000)
const port = process.env.PORT || 3000;

// Startup message
console.log(`Telegram bot started. Listening on port ${port}...`);

