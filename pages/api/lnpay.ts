import rateLimit from 'express-rate-limit';
import Cors from 'cors';
import { getIp, toWithError } from '../../src/helpers';

const metadata = [['text/plain', 'ThunderHub']];

const MAX_VALUE = 1000000000;
const MIN_VALUE = 1000;

const response = {
  callback: 'https://thunderhub.io/api/lnpay',
  maxSendable: MAX_VALUE,
  minSendable: MIN_VALUE,
  metadata: JSON.stringify(metadata),
  tag: 'payRequest',
};

const cors = Cors({ origin: '*' });

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 4,
  keyGenerator: getIp,
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await runMiddleware(req, res, limiter);

  const {
    query: { amount },
  } = req;

  if (amount) {
    const value = Number(amount);

    if (isNaN(value)) {
      res.status(200).json({ status: 'ERROR', reason: 'IncorrectValueAmount' });
      return;
    }

    const normalized = Math.min(Math.max(value, MIN_VALUE), MAX_VALUE);

    const tokens = Math.round(normalized / 1000);
    const [invoice, error] = await toWithError(
      fetch(process.env.LND_REST, {
        method: 'post',
        body: JSON.stringify({ value: tokens, memo: 'ThunderHub Donation' }),
        headers: {
          Accept: 'application/json',

          'Content-Type': 'application/json',
          'Grpc-Metadata-macaroon': process.env.LND_MACAROON,
        },
      })
    );

    if (error) {
      res.status(200).json({ status: 'ERROR', reason: 'ErrorCreatingInvoice' });
      return;
    }

    const response = await invoice.json();

    res.status(200).json({
      pr: response.payment_request,
      successAction: null,
      disposable: false,
      routes: [],
    });
    return;
  }

  res.status(200).json(response);
}
