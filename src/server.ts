import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = Number(process.env.PORT);
const startServer = async () => {
  try {
    await app.listen({ port: PORT }).then(() => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};
startServer();
