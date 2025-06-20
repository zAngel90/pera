const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contacto@conectacapitalpartners.com',
    pass: 'uDesYAjc4nGz',
  },
});

// Ruta para enviar correos del formulario principal
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Por favor, complete todos los campos requeridos.' });
    }

    // Configuración del correo
    const mailOptions = {
      from: 'contacto@conectacapitalpartners.com',
      to: 'contacto@conectacapitalpartners.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje. Por favor, intente nuevamente.' });
  }
});

// Ruta para enviar correos del formulario rápido
app.post('/api/quick-contact', async (req, res) => {
  try {
    const { name, email, phone, reason } = req.body;

    // Validación básica
    if (!name || !email || !phone || !reason) {
      return res.status(400).json({ error: 'Por favor, complete todos los campos requeridos.' });
    }

    // Configuración del correo
    const mailOptions = {
      from: 'contacto@conectacapitalpartners.com',
      to: 'contacto@conectacapitalpartners.com',
      subject: `Nuevo contacto rápido de ${name} - ${reason}`,
      html: `
        <h2>Nuevo contacto rápido</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Motivo de contacto:</strong> ${reason}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje. Por favor, intente nuevamente.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 