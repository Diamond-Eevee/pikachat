const config = require('./server-config');
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');

const { Server } = require('ws');
import { SocketServer } from "../BE//src/socket-server";
import { MessageStorage } from "../BE/src/message-storage";

// SSL Certificates
const privateKey = fs.readFileSync(config.SSLPrivateKeyPath, 'utf8');
const certificate = fs.readFileSync(config.SSLCertificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Dynamic Routes Handling
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist'));
});

let webServer;
let PORT;

if (config.useHTTPS) {
  webServer = https.createServer(credentials, app);
  PORT = process.env.PORT || 443;
} else {
  webServer = http.createServer(app);
  PORT = process.env.PORT || 80;
}

// Start the server

webServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

new SocketServer(
  new Server({ server: webServer }),
  new MessageStorage()
).start();
