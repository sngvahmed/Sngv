export class SocialMedia {
    constructor(appServer) {
        this._msg = [
            {github: "https://github.com/sngvahmed"} ,
            {linkedIn: "https://www.linkedin.com/in/ahmed-nasser-sngv"},
            {facebook: "https://www.facebook.com/sngv1993"},
            {twitter: "https://twitter.com/ahmed_nasser93"},
            {google: "https://plus.google.com/+nasserfci"}
        ];

        this.register(appServer);
    }

    register(appServer) {
        appServer.get('/social-media', (req, res) => {
            res.json(Object.assign({"code": "200"}, {"_msg": this._msg}));
        });
    }

}