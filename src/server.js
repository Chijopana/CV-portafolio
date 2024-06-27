const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Configurar el transporte del correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu_correo@gmail.com', // Cambiar por tu correo
      pass: 'tu_contraseña', // Cambiar por tu contraseña
    },
  });

  // Configurar el contenido del correo
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'tucorreoelectronico@dominio.com', // Cambiar por tu correo electrónico
    subject: 'Mensaje del formulario de contacto',
    text: `
      Nombre: ${nombre}
      Email: ${email}
      Mensaje: ${mensaje}
    `,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
