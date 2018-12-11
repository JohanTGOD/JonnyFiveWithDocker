const express = require('express');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/led', (req, res) => {
    res.send({
      "results" : [
        {
           "address_components" : [
              {
                 "Estado0" : "Apagado",
                 "Estado1" : "Encendido"
              }
           ],
           "EstadoLuzPiscina" : "Led Luz Piscina Encendido",
           "EstadoLuzPiscina1" : "Led Luz Piscina Apagado",
           "EstadoSalaDeEstar" : "Led Sala De Estar Encendido",
           "EstadoSalaDeEstar1" : "Led Cuarto Principal Apagado",
           "EstadoCuartoSecundario" : "Led Cuarto Secundario Encendido",
           "EstadoCuartoSecundario1" : "Led Cuarto Secundario Apagado",
           "EstadoBano" : "Led Baño Principal Encendido",
           "EstadoBano1" : "Led Baño Principal Apagado",
           "EstadoBanoSecundario" : "Led Baño Secundario Encendido",
           "EstadoBanoSecundario1" : "Led Baño Secundario Apagado",
           "Calificaion" : "10",
           "types" : [ "establishment", "point_of_interest" ]
        }
     ],
     "status" : "OK" }
   );
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);