import mongoose, { connect } from 'mongoose';

const { NODE_ENV, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const url =
  NODE_ENV === 'production'
    ? `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    : `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
