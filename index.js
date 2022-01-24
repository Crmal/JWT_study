const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();

const v1 = require('./routes/v1');

app.use(express.json());
app.use('/v1', v1);


app.listen(port, () => {
  console.log(`${port}에서 대기중`);
})