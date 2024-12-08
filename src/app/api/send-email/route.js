// src/app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
console.log(name,email,message);

    // Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Setup transporter for email (using Gmail for example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465, // Use 587 for TLS
      secure: true, // Use false for TLS
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,         // Your email password or app-specific password
      },
      tls: {
        rejectUnauthorized: false,   // This tells Nodemailer to ignore certificate issues
      },
   
    });
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #007acc;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          padding: 20px;
          color: #333333;
        }
        .content h2 {
          color: #007acc;
          font-size: 20px;
          margin-bottom: 10px;
        }
        .content p {
          margin: 10px 0;
          line-height: 1.6;
        }
        .content .highlight {
          font-weight: bold;
          color: #333333;
        }
        .footer {
          background-color: #f3f3f3;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #777777;
        }
        .footer a {
          color: #007acc;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .email-container {
            width: 100%;
          }
          .content {
            padding: 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          New Contact Form Submission
        </div>
        <div class="content">
          <h2>Contact Details</h2>
          <p><span class="highlight">Name:</span> ${name}</p>
          <p><span class="highlight">Email:</span> ${email}</p>
          <h2>Message</h2>
          <pre>${message}</pre>
        </div>
        <div class="footer">
          <p>You received this message because someone filled out the contact form on your website.</p>
        </div>
      </div>
    </body>
    </html>
  `.replace("{{name}}", name).replace("{{email}}", email).replace("{{message}}", message);

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // Your destination email address
      subject: `Contact Message from ${name}`,
      html:htmlTemplate,
    };

    // Send email
    
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
}
