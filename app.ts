import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});