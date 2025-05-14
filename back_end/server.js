import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
// Kết nối db
// mongoose.connect(``);

// routers

export const viteNodeApp = app;
