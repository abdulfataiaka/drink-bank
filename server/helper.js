import fs from 'fs';
import path from 'path';

const indexPath = path.join(__dirname, '../public', 'index.html');

/**
 * 
 * @description check the existence of file
 * 
 * @param { String } pathname 
 * 
 * @returns { Promise }
 */
const checkFile = (pathname) => new Promise((resolve, reject) => {
  fs.stat(pathname, (error, stats) => {
    if (error) return reject(error);
    
    if (!stats.isFile()) return reject(
      new Error('path provided does not point to a file')
    );
    
    return resolve();
  });
});

/**
 * 
 * @description send 404 response
 * 
 * @param {*} response 
 */
const send404 = (response) => {
  response.writeHead(404);
  response.end();
}

/**
 * 
 * @description get file content type to send
 * 
 * @param { String } extension 
 * 
 * @returns { String }
 */
const getContentType = extension => {
  switch(extension) {
    case '.js': return 'text/javascript';
    case '.css': return 'text/css';
    case '.html': return 'text/html';
    default : return 'text/plain';
  }
}

/**
 * 
 * @description send file response
 * 
 * @param {*} response
 * @param { String } pathname
 * @param { String } contentType
 * 
 * @returns { Promise }
 */
const sendFile = (response, pathname, contentType) => {
  return checkFile(pathname)
    .then(() => {
      response.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(pathname).pipe(response);
    })
    .catch(() => false);
}

/**
 * 
 * @description send index file
 * 
 * @param {*} response
 */
export const sendIndex = response => {
  sendFile(response, indexPath, 'text/html')
    .then(status => {
      if (status === false) {
        send404(response);
      }
    });
}

/**
 * 
 * @description get url path base dir
 * 
 * @param { String } pathname
 * 
 * @returns { String }
 */
export const getBaseDir = pathname => {
  const dirname = path.dirname(pathname);
  return dirname.split('/')[1] || '/';
};

/**
 * 
 * @description serve any static file
 * 
 * @param {*} response
 * @param { String } pathname
 * 
 * @returns { Promise }
 */
export const serveStatic = (response, pathname) => {
  const fullpath = path.join(__dirname, '..', pathname);
  const extension = path.extname(pathname);
  const contentType = getContentType(extension);
  return sendFile(response, fullpath, contentType);
}