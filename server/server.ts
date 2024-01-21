'use strict';
import express, {Request, Response, Router} from "express";
const app = express();

app.get('/consulta', async (request, response) => {
  const req = require('request');
  const  symbol  = request.body; // Usando query parameters ao invés de body

  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=1min&apikey=T3XYNXFW3BL0EAMS`;

  req.get({
    url: apiUrl,
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err: any, res: { statusCode: number; }, data: any) => {
    if (err) {
      console.log('Error:', err);
      response.status(500).send('Internal Server Error');
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
      response.status(res.statusCode).send('Error');
    } else {
      // Os dados foram recebidos com sucesso como um objeto JSON:
      console.log(data);
      response.json(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});