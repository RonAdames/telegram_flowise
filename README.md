# Telegram Bot Flowise
Flowise Telegram Bot 🤖 with Langchain Technology
This Telegram bot leverages Flowise API calls, providing a myriad of possibilities through Langchain technology.

As a non-coder, I've observed various Telegram bots integrating with n8n, Make, and Activepieces. However, I believe that fewer integrations can lead to fewer issues. Therefore, I embarked on creating my own Telegram bot using Flowise, with assistance from ChatGPT and my limited programming knowledge, until I successfully got it up and running.

I've decided to share this bot with the community, in the hopes that it may undergo further modifications. If you'd like to contribute to its improvement, you are more than welcome!

## Telegram Bot Installation Guide 📔

Follow these steps to set up and run your Telegram bot on Node.js:

### Step 1: Clone the Repository
git clone https://github.com/RonAdames/Telegram_Bot_Flowise.git

### Step 2: Navigate to the Project Directory
cd Telegram_Bot_Flowise

### Step 3: Install Dependencies
Ensure that you have Node.js and npm installed. Then, install the required packages:

npm install

### Step 4: Create a Telegram Bot on BotFather
Open Telegram and search for the "BotFather" bot.
Start a chat with BotFather and use the /newbot command to create a new bot.
Follow the instructions to set a name and username for your bot.
Once the bot is created, note down the generated API token.

### Step 5: Configure the Bot
Open the project in your preferred code editor.
Locate the .env.example file and rename it to .env.
Replace the placeholder TELEGRAM_BOT_TOKEN with the API token obtained from BotFather.
At this point I asume you have flowise running otherwise take a look at https://flowiseai.com, so get your flowise api url and api token.
Replace your API_URL and API_TOKEN

### Step 6: Run the Bot
Now you it's time to start your bot.

npm start

### Step 7: Test the Bot
Open Telegram and search for your bot using the username you provided during creation. Start a chat with the bot and send a test command to ensure it responds correctly.
Congratulations! Your Telegram bot is successfully installed and running.

If you encounter any issues, refer to the project's documentation or seek help from the community.

Remember to customize the instructions according to your project structure and specific setup steps. Additionally, provide any additional information or troubleshooting steps if needed.

### If you need to install the Dockefile using the docker build
run de following command

docker build -t telegram-bot .
docker run -p 3000:3000 telegram-bot



### I hope you enjoy it and happy botting! 🤖
