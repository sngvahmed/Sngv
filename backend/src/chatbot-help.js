export class ChatBotHelp {
    constructor(appServer) {
        this._msg = [
            "hint: please copy and paste the text",
            "list of question:",
            "1) introduce you self",
            "2) your strength point",
            "3) your weakness point",
            "4) you projects"
        ];

        this.register(appServer);
    }

    register(appServer) {
        appServer.get('/msg/help', (req, res) => {
            res.json(Object.assign({"code": "200"}, {"_msg": this._msg}));
        });
    }
}