const { Server } = require('ws');
import { SocketServer } from "./src/socket-server";
import { MessageStorage } from './src/message-storage';

new SocketServer(
    new Server({ port: 80 }), 
    new MessageStorage()
).start();