import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';

interface User {
  username: string;
  password: string;
}

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, `db.json`));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(async (_req, _res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

server.post(`/login`, (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, `db.json`), `utf-8`),
  );
  const { users } = db;

  const user = users.find(
    (item: User) => item.username === username && item.password === password,
  );

  if (user) {
    return res.json(user);
  }

  return res.status(403).json({ message: 'Authorization error' });
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Authorization error' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log(`JSON-Server started on 8000 PORT`);
});
