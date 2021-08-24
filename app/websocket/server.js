import { Server } from 'socket.io';
import { allowedOrigins } from '../middlewares/cors';
import httpServer from '../app';

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
  }
});

export default httpServer;
