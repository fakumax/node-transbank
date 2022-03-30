const server = require('./src/app');

const connectDB = async () => {
  try {
    server.listen(process.env.PORT || 5000, () => {
      console.log(`Listening on PORT ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectDB();
