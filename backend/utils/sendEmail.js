
import nodemailer from 'nodemailer'

export const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMIP_EMAIL,
            pass: process.env.SMIP_PASSWORD
        }
    });


    const mailOptions = {
        from: `${process.env.SMIP_FROM_EMAIL} <${process.env.SMIP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}