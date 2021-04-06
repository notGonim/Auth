
import nodemailer from 'nodemailer'

export const sendEmail = async data => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMIP_HOST,
        port: process.env.SMIP_PORT,
        auth: {
            user: process.env.SMIP_EMAIL,
            pass: process.env.SMIP_PASSWORD
        }
    });


    const message = {
        from: `${process.env.SMIP_FROM_EMAIL} <${process.env.SMIP_FROM_EMAIL}>`,
        to: data.email,
        subject: data.subject,
        text: data.message
    }
    await transporter.sendMail(message)
}