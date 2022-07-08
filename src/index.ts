import { expressLoader } from './loaders';
import express from 'express';

async function start() {
    const app = express();
    await expressLoader(app);
    app.listen(3000, () => console.log('Server started at port 3000'));
}