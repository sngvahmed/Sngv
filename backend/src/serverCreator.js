'use strict';
import {SocialMediaController} from './controller/social.media.controller'
import { HomeController } from './controller/home.controller';
import { ProjectController } from './controller/project.controller';
const Express = require('express');

export class Server {
    constructor() {
        this._server = Express();

        this._server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        
        new ProjectController(this.server)
        new SocialMediaController(this._server);
        new HomeController(this._server);
        this._server.get(/.*/, Express.static('app'));

    }

    get server () { 
        return this._server; 
    }
}