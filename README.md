Demo: https://www.loom.com/share/e4cdc5b60a3949c2bf5c32bf5caca297

# RoadBuddy AI
A Telegram chatbot that teaches driving theory with real street photos from your own city, one quick quiz at a time.

## Features

- **Hyper-local quizzes**: Utilizes Mapillary street-level images from the user’s city.
- **Multimodal LLM**: Mistral AI generates a multiple-choice question with 3 options and a one-sentence explanation.
- **Infinite learning**: You can process an infinite number of completely unique questions.
- **Zero setup**: Everything runs directly in Telegram—no additional apps required.

## 🙌 Made by: 

[//]: contributor-faces
<a href="https://github.com/redarling"><img src="https://avatars.githubusercontent.com/u/79450349?v=4" title="Andrii" width="50" height="50"></a>
<a href="https://github.com/Jan-Matter"><img src="https://avatars.githubusercontent.com/u/93545347?v=4" title="Jan" width="50" height="50"></a>
<a href="https://github.com/yvann-ba"><img src="https://avatars.githubusercontent.com/u/97234242?v=4" title="Yvann" width="50" height="50"></a>
<a href="https://github.com/ismaelmehdid"><img src="https://avatars.githubusercontent.com/u/149189461?v=4" title="Ismael" width="50" height="50"></a>

[//]: contributor-faces
## Tech Stack

- **Bot**: Telegram Bot API with Telegraf SDK
- **Images**: Mapillary REST API
- **LLM**: Mistral AI
- **Backend**: Express on TypeScript
- **Storage**: PostgreSQL DB

## Architecture explanation
![image](https://github.com/user-attachments/assets/0135a9df-ed87-46c6-b666-4fa49fc743f7)

## Dependencies

   - Docker
   - Ngrok
     
## Getting Started

1. **Clone the repo and run these commands**

   ```bash
   git clone https://github.com/yvann-ba/RoadBuddy-AI
   cd RoadBuddy-AI
   cd bot/
   npm i
   cd ..
   ```
2. **Setup ngrok**

In another terminal please run:

   ```bash
   ngrok htpp 3000
   ```


   <img width="821" alt="Screenshot 2025-05-24 at 20 36 55" src="https://github.com/user-attachments/assets/590ac93b-2779-43ec-b1af-bedeb65366d0" />

   Copy the URL highlighted in the image above to set up your environment variables later.

4. **To create your own bot, simply follow these steps**
   
   For any questions or assistance, feel free to reach out to me:
      - **LinkedIn**: [Andrii Syvash](https://www.linkedin.com/in/asyvash/)
      - **Email**: [asyvash.work.it@gmail.com](mailto:asyvash.work.it@gmail.com)
     
3. **Create .env file using this template**

   ```bash
   POSTGRES_DB=telegram_bot
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
   
   TELEGRAM_TOKEN=
   BOT_PORT=3000
   WEBHOOK_URL=
   ```
   Paste the ngrok URL you copied earlier into the `WEBHOOK_URL` variable.
   Also, paste your Telegram token into the `TELEGRAM_TOKEN` variable.

5. **Almost ready to start!**

   If you followed all the steps correctly, run the final command to start the project:

   ```bash
      ./setup.sh start
   ```

## Potential bussiness model:

   - We can limit daily messages to 10. After that, users will need to purchase a subscription.
   - A perfect solution for passing the driving exam, as you will practice with real images from your city.

## Team:
[Andrii Syvash](https://www.linkedin.com/in/asyvash/)<br>
[Ismael Mehdid](https://www.linkedin.com/in/ismaelmehdid/)<br>
[Jan Matter](https://www.linkedin.com/in/jan-matter-855aa4191/)<br>
[Yvann Barbot](https://www.linkedin.com/in/yvann-barbot/)
