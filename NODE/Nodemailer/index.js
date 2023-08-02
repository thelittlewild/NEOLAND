const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const server = express();
const router = express.Router();
router.get("/sendnewmail", (req, res) => {
  const password = process.env.PASSWORD;
  const email = process.env.EMAIL;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: email,
    to: "thelittlewild@gmail.com",
    subject: "Confirmation TEST NODEMAILER",
    text: "ok todo bien",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      return res.status(200).json("Email sent: " + info.response);
    }
  });
});

server.use("/", router);

const port = process.env.PORT;
const url = process.env.URL;
server.listen(port, () => {
  console.log(`Server running on ${url}`);
});
