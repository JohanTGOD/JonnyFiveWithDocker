const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/motor', (req, res) => {
  res.send({
    "results" : [
       {
          "address_components" : [
             {
                "Estado1" : "On",
                "Estado2 " : "Off"
             }
          ],
          "Motor1" : "Cerrando Puerta !!!",
          "Motor2" : "Abriendo Puerta !!! ",
          "Calificaion" : "10",
          "types" : [ "establishment", "point_of_interest" ]
       }
    ],
    "status" : "OK"
 }
 );
});

app.get('/runbitch', (req, res) => {
    res.send('Motoreando\n');
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);