// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  resetPassword: ([to, url], callBack) => {
    const msg = {
      to: to,
      from: process.env.FROM_EMAIL,
      template_id: "d-6690bc81d8d947c1ab13b5c3ff3b208f",
      dynamic_template_data: {
        url: url,
      },
    };
    sgMail
      .send(msg)
      .then(() => {
        return callBack(null);
      })
      .catch((error) => {
        console.log(error);
        return callBack(error);
      });
  },
};
