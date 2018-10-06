import $ from "jquery";
import * as rxjs from 'rxjs';
const fromEvent = rxjs.fromEvent;

export class SocialMedia {
     
    constructor() {
        let _socialUrl = "http://localhost:9000/social-media";

        Object.assign(this, {
            get _socialUrl() {
                return _socialUrl;
            }
        });
    }

    fetchSocialMediaLogoUrl() { return fetch(this._socialUrl).then(res => res.json())
        .then( res => this.applyOnIcon(res) ); }

    applyOnIcon(res) {
        let openUrl = (url) => window.open(url, url);

        fromEvent($('#facebook'), 'click').subscribe(() => openUrl(res.result["facebook"]))
        fromEvent($('#googlePlus'), 'click').subscribe(() => openUrl(res.result["google"]))
        fromEvent($('#twitter'), 'click').subscribe(() => openUrl(res.result["twitter"]))
        fromEvent($('#linkedIn'), 'click').subscribe(() => openUrl(res.result["linkedIn"]))
        fromEvent($('#github'), 'click').subscribe(() => openUrl(res.result["github"]))
    }
}
