import 'bootstrap/dist/css/bootstrap.min.css';
import '@icon/open-iconic/open-iconic.css'
import "./css/main.scss"

import "./img/profile.jpg"

import "./img/social/f.png"
import "./img/social/l.png"
import "./img/social/w.png"
import "./img/social/t.png"
import "./img/social/g.png"

import "./img/home.png"
import "./img/resume.png"
import "./img/project.png"
import "./img/contact.png"

import $ from "jquery";

import { MineChat } from "./chat-my";
import { ChatGuest } from "./chat-guest";


const chatGuest = new ChatGuest();
const myChat = new MineChat();
var chatHistory = $(".chat-history");

myChat.getHelpMsg((msgs) => {
    chatHistory.append(myChat.buildHelpChat(msgs));
});


