const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
const TELEGRAM_BOT_TOKEN = '8741366924:AAGbraN9PJQPLta5hnAcFWNYTPrYRbLmlXI';
const TELEGRAM_CHAT_ID = '7269190670'; // Ganti dengan chat ID admin

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Tambahkan middleware CORS

app.post('/api/topup', async (req, res) => {
    const { userId, userName, inputNominal, paymentMethod } = req.body;

    const message = `
📢 *Permintaan Top-Up Baru* 📢

👤 *User ID:* ${userId}
👥 *Nama Pengguna:* ${userName}
💵 *Nominal:* ${inputNominal}
💳 *Metode Pembayaran:* ${paymentMethod}

🔔 Mohon segera diproses.
    `;

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown' // Agar format markdown diterapkan
        });
        res.status(200).send('Success');
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        res.status(500).send('Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
