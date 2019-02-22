import url from 'url';
import http from 'http';
import connect from 'connect';
import { sendIndex, serveStatic, getBaseDir } from './helper';

const app = connect();
const port = process.env.PORT || 4500;
const statics = [ 'build' ];

// server static files for folders specified in statics and public
app.use((request, response) => {
  let pathname = url.parse(request.url).pathname.trim();
  const basedir = getBaseDir(pathname);
  
  if (!statics.includes(basedir)) {
    pathname = `/public/${pathname}`;
  }

  serveStatic(response, pathname)
    .then(status => {
      if (status === false) {
        sendIndex(response);
      }
    });
});

const server = http.createServer(app)

server.listen(port, (error) => {
  if (error) {
    console.log(`\n[!] Error occured while starting server on port ${port}\n`)
    throw error;
  }
  
  console.log(`\n[*] Server started on port ${port}\n`)
});
