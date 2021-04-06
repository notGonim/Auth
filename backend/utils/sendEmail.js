
import nodemailer from 'nodemailer'

export const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "65c1b347b13cb3",
            pass: "d6119bf005595a"
        }
    });


    const mailOptions = {
        from: 'mhmodgonim96@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

}