require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET,
  dbconfig: {
    host: process.env.DB_HOST,
  },
  cloudinaryConfig: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  },
};
