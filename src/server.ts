import app from "./app";
import "dotenv/config";
const port = process.env.PORT || 5000;

const main = async () => {
  const server = await app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });
};
main();
