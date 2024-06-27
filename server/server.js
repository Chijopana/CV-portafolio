const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transportador de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // O usa otro servicio como Outlook, Yahoo, etc.
  auth: {
    user: 'jose7blondel@gmail.com', // Tu correo electrónico
    pass: 'xvke djhc pigg pbys', // Tu contraseña: xvke djhc pigg pbys
  },
});

app.post('/send-email', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const mailOptions = {
    from: email,
    to: 'jose7blondel@gmail.com',
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado con éxito.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
