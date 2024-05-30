import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { workoutRouter } from './routes/workoutRoutes.js';

import { errorMiddleware } from './middleware/errorMiddleware.js';

const app = express();
const port = 3000;

// Cors configuration - Allows requests from localhost:4200
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 204,
  methods: 'GET, POST, PUT, DELETE',
};

// Use cors middleware
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());
app.use(errorMiddleware);

app.use('/workouts', workoutRouter);

app.use(express.static(path.join(__dirname, '../')));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
