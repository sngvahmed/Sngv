import { Database } from "./../database";

export class HomeController {
    constructor(appServer) {
        this._msg = Database.homeContent;

        this.register(appServer);
    }

    register(appServer) {
        appServer.get('/home', (req, res) => {
            res.json(Object.assign({"code": "200"}, {"result": this._msg}));
        });
    }

}