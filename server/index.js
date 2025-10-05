import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRouter from './routes/auth.js';
import bookingRouter from './routes/booking.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  credentials: false,
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotelapp';
const DB_NAME = process.env.DB_NAME; // optional override of db name

async function start() {
  try {
    const connectOptions = DB_NAME ? { dbName: DB_NAME } : undefined;
    await mongoose.connect(MONGODB_URI, connectOptions);
    console.log('Connected to MongoDB');

    app.get('/health', (req, res) => {
      res.json({ ok: true });
    });

    app.use('/api/auth', authRouter);
    app.use('/api/bookings', bookingRouter);

    // Only start a listener when running locally (not in Vercel serverless)
    if (!process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    }
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

// Start only in traditional server environments; on Vercel the default export is used
if (!process.env.VERCEL) {
  start();
}

export default app;


