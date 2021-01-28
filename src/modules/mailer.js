const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars');
const {host, port, user, pass} = require('../config/mail.json');

let transport = nodemailer.createTransport({
    sendmail: true,
    host,
    port,
    auth: { user, pass }
  });


  transport.use('compile', hbs({
      viewEngine: {
          defaultLayout: 'forgot_password.html',
          partialsDir: path.resolve('./src/resource/mail/'),
      },
      viewPath: path.resolve('./src/resource/mail/'),
      extName: '.html',
  }))

  module.exports = transport;