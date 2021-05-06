const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

export default function (options = {}) {
  const {
          header = 'x-authenticated-scope',
          scope  = 'admin',
          status = 401
        }      = options;
  const scopes = [...new Set(deepFlatten([scope, options.scopes]).filter(x => !!x))];

  return function (req, res, next) {
    if (options.debug === true) {
      console.log(scopes, req.get(header), scopes.indexOf(req.get(header)) > -1);
    }
    if (scopes.indexOf(req.get(header)) > -1) {
      next();
    } else {
      res.sendStatus(status);
    }
  };
}
