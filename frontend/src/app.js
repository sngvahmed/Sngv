import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.scss"
import "./img/profile.jpg"
import $ from "jquery";

import { MineChat } from "./chat-my";
import { ChatGuest } from "./chat-guest";

const chatGuest = new ChatGuest();
const myChat = new MineChat();
var chatHistory = $(".chat-history");

myChat.getHelpMsg((msgs) => {
    chatHistory.append(myChat.buildHelpChat(msgs));
});


