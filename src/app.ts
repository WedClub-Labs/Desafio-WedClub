import express from "express";
import "dotenv/config";

const app = express();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
