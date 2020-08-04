import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Wold' });
});

app.listen(3333);