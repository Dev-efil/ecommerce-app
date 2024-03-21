import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
    },
});

const sendEmail = async (to, subject, htmlContent) => {
    try {
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to,
            subject,
            html: htmlContent
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail;