const app = require("./app");
const nodemailer = require("nodemailer");

const env = {
    authUser: process.env.emailAuthUser,
    authPass: process.env.emailAuthPassword
}

app.post("/", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "",
        port: 587,
        auth: {
            user: env.authUser,
            pass: env.authPass
        }
    });
      
    const mailOptions = {
        from: req.body.FirstName + " " + req.body.emailLastName + " <" + req.body.betaEmail +">",
        to: env.authEmail
    };
      
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
});

