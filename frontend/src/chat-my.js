import { get } from "./config/http"
import { STATIC } from './config/static';
import "./img/profile.jpg"
import $ from "jquery";

export class MineChat {
    constructor() {
    }

    getHelpMsg(cb) {
        $("#chatInput").prop("disabled", true);
        get(`${STATIC.SERVER_URL}/msg/help`).then((res) => {
            $("#chatInput").prop("disabled", false);
            cb(res);
        });
    }

    htmlComponent() { 
        return `<div class="row">
            <div class="col-md-2">
                <img src="/w3images/bandmember.jpg" alt="Avatar">
            </div>
            <div class="col-md-10">
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
        </div>`;
    }


    buildHelpChat (_msgs) {
        return `<div class="row">
            <div class="col-md-2">
                <img src="img/profile.jpg" alt="Avatar">
            </div>
            <div class="col-md-10">
                <p>Hello. How are you today?</p>
                <p> this is the list of the message i can answer for now. </p>
                ${_msgs._msg.map((msg) => {
                    return `<p>${msg}</p>`
                }).join("")}
                <p> thanks for your understand </p>
                <span class="time-right">11:00</span>
            </div>
        </div>`;
    }
}