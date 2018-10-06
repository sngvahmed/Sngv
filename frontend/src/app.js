import "./index"

import $ from "jquery";
import * as rxjs from 'rxjs';
const fromEvent = rxjs.fromEvent;

import { SocialMedia } from './social.media.service';
import { Home } from './component/home';
import { Skills } from './component/skills';
import { Contact } from './component/contact';
import { Project } from './component/project';

class App {
    constructor() {
        this.socialMedia = new SocialMedia();
        this.home = new Home();
        this.skills = new Skills();
        this.contact = new Contact();
        this.project = new Project();
    }

    init() {
        this.socialMedia.fetchSocialMediaLogoUrl();
        this.handlePageChainging();
        $('#sngv-content').html(this.home.html);
    }

    handlePageChainging() {
        fromEvent($('.oi-home'), 'click').subscribe(() => {
            $('#sngv-content').html(this.home.html);
        })

        fromEvent($('.oi-project'), 'click').subscribe(() => {
            $('#sngv-content').html(this.project.html);
        })

        fromEvent($('.oi-code'), 'click').subscribe(() => {
            $('#sngv-content').html(this.skills.html);
        })

        fromEvent($('.oi-double-quote-serif-right'), 'click').subscribe(() => {
            $('#sngv-content').html(this.contact.html);
        })
    }
}

new App().init();
