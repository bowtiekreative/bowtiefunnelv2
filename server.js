// server.js
// A minimal HTTP server using only built‑in Node modules. It serves static
// files from the `public/` directory and implements a single JSON API
// endpoint for handling form submissions. This avoids any external
// dependencies so the project can be run in environments without
// internet access or npm packages.

const http = require('http');
const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, 'public');

// Map of file extensions to MIME types. Extend this map as needed.
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Helper function to serve a static file
function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If an error occurs reading the file, fall back to the index.html
      const indexPath = path.join(publicPath, 'index.html');
      fs.readFile(indexPath, (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(500);
          res.end('Internal server error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexData);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Handle POST requests to /api/subscribe
  if (req.method === 'POST' && req.url === '/api/subscribe') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        // Log the posted data for demonstration purposes
        console.log('Received subscription:', data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Subscription received' }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // Serve static files or fall back to index.html for SPA routing
  // Strip query parameters from the URL
  let requestPath = req.url.split('?')[0];
  if (requestPath === '/' || requestPath === '') {
    requestPath = '/index.html';
  }
  const filePath = path.join(publicPath, decodeURIComponent(requestPath));
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(res, filePath);
    } else {
      // If the file does not exist, serve index.html (SPA fallback)
      const indexPath = path.join(publicPath, 'index.html');
      serveFile(res, indexPath);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});