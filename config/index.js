const PORT = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  PORT,
  BASE_URL: process.env.BASE_URL || `http://localhost:${PORT}/api`,
};
