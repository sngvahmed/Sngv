import { Database } from "./../database";

export class ProjectController {
    constructor(appServer) {
        this._msg = Database.project;

        this.register(appServer);
    }

    register(appServer) {
        appServer.get('/project', (req, res) => {
            res.json(Object.assign({"code": "200"}, {"result": this._msg}));
        });
    }

}