const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
  try {
    // Send an email to the website administrator
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "youremail@gmail.com",
        pass: "yourpassword"
      }
    });

    const mailOptions = {
      from: req.body.email,
      to: 'johnvolpitta@gmail.com',
      subject: 'Contact Us Form Submission',
      text: `Name: ${req.body.name}\nPhone: ${req.body.phone}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\n Message: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({ message: 'Your message was sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;