const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);


/* server.post('/login', (req, res) => {
  try {
    
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}); */

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
/* server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});
 */
server.use(router);

// запуск сервера
server.listen(3003, () => {
  console.log('server is running on 3003 port');
});