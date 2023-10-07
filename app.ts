import express, { Request, Response } from 'express';
import { getSampleData } from './src/controllers/sample.controller';
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/data', getSampleData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;