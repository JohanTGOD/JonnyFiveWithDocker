const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/termometro', (req, res) => {
    res.send({



      "results" : [
        {
           "address_components" : [
              {
                 "Caliente_Celsius" : "Mayor a 45 grados C",
                 "Frio_Celsius " : "Inferior a 5 grados C"
              },
              {
                 "Caliente_Farehei" : "Mayor a 70 grados F",
                 "Frio_Farehei" : "Inferior a 15 grados F"
              }
           ],
           "Tempe" : "La temperatura es: ",

           "Calificaion" : "10",
           "types" : [ "establishment", "point_of_interest" ]
        }
     ],
     "status" : "OK"
 
   }
   );
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);