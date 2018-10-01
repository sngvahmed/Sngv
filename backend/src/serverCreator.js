'use strict';
import {ChatBotHelp} from "./chatbot-help"
import { SocialMedia } from './social_media';
const Express = require('express');

export class Server {
    constructor() {
        this._server = Express();

        this._server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        // this._server.get("/msg/help", (req, res) => {
        //     res.json({msg: this.chatbotHelp._msg})
        // })

        new ChatBotHelp(this._server);
        new SocialMedia(this._server);
        this._server.get(/.*/, Express.static('app'));

    }

    get server () { 
        return this._server; 
    }
}