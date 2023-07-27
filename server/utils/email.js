import nodemailer from 'nodemailer'

export const sendEmail = async(email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PWD
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: text
        })
        console.log('email sent')
    } catch (error) {
        console.log('email not sent')
        console.log(error)
    }
}