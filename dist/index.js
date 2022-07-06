"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const MongoConnection_1 = require("./db/MongoConnection");
const urlController = new URLController_1.URLController();
const db = new MongoConnection_1.MongoConnection();
const app = (0, express_1.default)();
app.use(express_1.default.json());
db.connect();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.listen(3000, () => {
    console.log('servidor iniciado. OK!');
});
//# sourceMappingURL=index.js.map