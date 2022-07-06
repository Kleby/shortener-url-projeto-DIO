import { URLController } from "./controller/URLController";
import express, { NextFunction, Request, Response } from "express";
import { MongoConnection } from "./db/MongoConnection";

const urlController = new URLController();
const db = new MongoConnection();

const app = express();

app.use(express.json())

db.connect();

app.post('/shorten', urlController.shorten);

app.get('/:hash', urlController.redirect);

app.listen(3000, ()=> {
    console.log('servidor iniciado. OK!')
});