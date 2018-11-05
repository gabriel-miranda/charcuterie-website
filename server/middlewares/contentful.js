module.exports = {
  contentfulMiddleware: connections => (req, res, next) => {
    Object.keys(connections).forEach((c) => {
      req[c] = connections[c];
    });
    next();
  },
};
