import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

const BOT_RESPONSES = [
    "Hello there!",
    "How's it going?",
    "I'm a bot!",
    "That's a great point.",
    "Interesting."
];

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('chat message', {
            user: 'user',
            text: msg
        });

        setTimeout(() => {
            const randomResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
            io.emit('chat message', {
                user: 'bot',
                text: randomResponse
            });
        }, 1000);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
