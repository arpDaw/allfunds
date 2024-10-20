import express from 'express';
import { deleteNew, getNews, updateNew } from './src/news.js';

// Server instance
const app = express();

// Define port
const PORT = 9909;

// noSQL handles data as JSON
app.use(express.json());

// Endpoint routes
app.get('/news', getNews);
app.delete('/deleteNew/:title', deleteNew);
app.put('/updateNew', updateNew);

// Listen to the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
});
