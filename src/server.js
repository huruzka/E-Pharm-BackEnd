import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectMongoDB } from './db/connectMomgoDB.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

//Глобальні Middleware
app.use(cors()); // дозвіл для запитів з інших доменів

// Перший маршрут
app.get('/api/dashboard', (req, res) => {
  res.status(200).json({ message: 'Hello world!' });
});

//підключення до MongoDB
await connectMongoDB();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
