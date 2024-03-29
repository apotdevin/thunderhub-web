export const getIp = (req: any) => {
  if (!req || !req.headers) {
    return '';
  }
  const forwarded = req.headers['x-forwarded-for'];
  const before = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  const ip = process.env.NODE_ENV === 'development' ? '1.2.3.4' : before;
  return ip;
};

export const toWithError = (promise: Promise<any>) => {
  return promise.then(data => [data, undefined]).catch(err => [undefined, err]);
};
