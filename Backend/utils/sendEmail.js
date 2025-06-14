const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');


const sendEmail = async (to, subject, text) => {
  try {
   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,       // Replace with your email
        pass: process.env.SMTP_PASS     // Use an App Password if 2FA is on
      },
    });

    const mailOptions = {
      from:process.env.SMTP_USER, // sender address
      to,                           // list of receivers
      subject,                      // Subject line
      text                          // plain text body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;

