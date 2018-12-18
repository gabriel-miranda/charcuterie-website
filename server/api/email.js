const express = require('express');
const mail = require('@sendgrid/mail');
const striptags = require('striptags');
const debugLogger = require('debug-logger');
const { ServerError, BadRequest } = require('../../modules/error');
const { EMAIL, EMAIL_KEY } = require('../../config/server');

const log = debugLogger('app:api:email');

const router = express.Router();

const buildHTMLMessage = ({
  name,
  email,
  message,
  phone,
}) => `
  Contacto de <strong>${name}</strong> <em>&#x3C;${email}&#x3E;</em>.<br />
  <strong>Mensaje:</strong> ${message}. <br />
  ${phone ? `${name} dejó el siguiente número de teléfono para contacto: <strong>${phone}</strong>.` : `${name} no dejó un numero de teléfono.`}
`;

const htmlToText = html => striptags(html);

router.post('/email', async (req, res, next) => {
  try {
    const response = { status: 200, message: 'Mail Sent' };
    const {
      name,
      email,
      phone,
      message,
    } = req.body;
    if (
      !name
      || !email
      || !message
    ) {
      const error = new BadRequest();
      res.status(error.statusCode).send(error);
      return;
    }

    mail.setApiKey(EMAIL_KEY);

    const html = buildHTMLMessage({
      name,
      email,
      message,
      phone,
    });

    const msg = {
      to: EMAIL,
      from: 'Las 4 B Web - Formulario de contacto <contacto@las4b.com.ar>',
      subject: 'Contacto desde el formulario web',
      text: htmlToText(html),
      html,
    };
    await mail.send(msg);
    res.status(response.status).send(response);
  } catch (e) {
    log.error(e);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

module.exports = router;
