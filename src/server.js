import http from 'http';
import connect from 'connect';
import path from 'path';
import serveStatic from 'serve-static';
import serveIndex from 'serve-index';

const app = connect();
const port = process.env.PORT || 4500;

//++ server index file for other requests
app.use((request, response) => {
  response.end();
});

const server = http.createServer(app)

server.listen(port, (error) => {
  if (error) {
    console.log(`\n[!] Error occured while starting server on port ${port}\n`)
    throw error;
  }
  
  console.log(`\n[*] Server started on port ${port}\n`)
});
