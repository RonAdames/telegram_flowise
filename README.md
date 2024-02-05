# Telegram Bot Flowise
This is a Telegram Bot 🤖 using a Flowise API call giving a lot of posibilities with langchain tecnology.

# Telegram Bot Installation Guide

Follow these steps to set up and run your Telegram bot on Node.js:

## Step 1: Clone the Repository

git clone https://github.com/RonAdames/TelegramBotFlowise.git

## Step 2: Navigate to the Project Directory

cd TelegramBotFlowise

##Step 3: Install Dependencies

Ensure that you have Node.js and npm installed. Then, install the required packages:

npm install

## Step 4: Create a Telegram Bot on BotFather

Open Telegram and search for the "BotFather" bot.
Start a chat with BotFather and use the /newbot command to create a new bot.
Follow the instructions to set a name and username for your bot.
Once the bot is created, note down the generated API token.

##Step 5: Configure the Bot

Open the project in your preferred code editor.
Locate the .env.example file and rename it to .env.
Replace the placeholder TELEGRAM_BOT_TOKEN with the API token obtained from BotFather.
at this point I asume you have you chatflow installed on Flowise.
Replace the placeholder API_URL and API_TOKEN

## Step 6: Run the Bot

npm start

## Step 7: Test the Bot
Open Telegram and search for your bot using the username you provided during creation. Start a chat with the bot and send a test command to ensure it responds correctly.

Congratulations! Your Telegram bot is successfully installed and running.

If you encounter any issues, refer to the project's documentation or seek help from the community.

Happy botting! 🤖
