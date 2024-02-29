
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);

    const userEmail = data.email;
    // Configure your email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shubhamkumargarg63@gmail.com', 
        pass: 'Shuru123@', 
      },
    });

    // Email content
    const mailOptions = {
      from: 'shubhamkumargarg63@gmail.com', 
      to: userEmail, 
      subject: 'New Job Application',
      text: JSON.stringify(data, null, 2),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Application submitted successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting application.' }),
    };
  }
};