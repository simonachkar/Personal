var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
})

const sendEmail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'simon@simonachkar.com',
      to,
      subject,
      html,
    }

    transporter.sendMail(mailOptions, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

module.exports = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  const { html } = req.body || req.query

  if (html) {
    await sendEmail(
      'simon@simonachkar.com',
      '💻 Sent from my website',
      html
    )
      .then(
        (context.res = {
          body: 'Email sent',
        })
      )
      .catch(
        e =>
          (context.res = {
            status: 500,
            body: {
              message: `An error occurred`,
              error: e,
            },
          })
      )
  } else {
    context.res = {
      status: 400,
      body: 'Please pass <code>html</code> argument',
    }
  }
}
