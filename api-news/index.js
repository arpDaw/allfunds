import express from 'express';
import { deleteNew, getNews, updateNew } from './src/news.js';
import cors from 'cors'; // Import the cors package

// Server instance
const app = express();

// Define port
const PORT = 9909;

// Allow CORS for a specific domain
const allowedDomains = ['http://localhost:4200'];

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (Postman)
            if (!origin || allowedDomains.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

// noSQL handles data as JSON
app.use(express.json());

// Endpoint routes
app.get('/news', getNews);
app.delete('/news/:id', deleteNew);
app.put('/news/:id', updateNew);

// Listen to the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
});
