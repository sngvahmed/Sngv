import { Database } from "./../database";

export class SocialMediaController {
    constructor(appServer) {
        this._msg = Database.socialUrls;

        this.register(appServer);
    }

    register(appServer) {
        appServer.get('/social-media', (req, res) => {
            res.json(Object.assign({"code": "200"}, {"result": this._msg}));
        });
    }

}