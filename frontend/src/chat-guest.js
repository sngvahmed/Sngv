export class ChatGuest {
    
    constructor() {
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, explicabo quasi ratione odio dolorum harum.'
    }
    htmlComponent(){
        return `
        <div class="chat-message clearfix">
            <img src="http://lorempixum.com/32/32/people" alt="" width="32" height="32">
            <div class="chat-message-content clearfix">
                <span class="chat-time">13:35</span>
                <h5>John Doe</h5>
                <p>${this.text}</p>
            </div> <!-- end chat-message-content -->
        </div> <!-- end chat-message -->
        <hr>`;
    }

    generateChat() {
        let range = n => Array.from(Array(100).keys())
        let _ = "";
        for (const i in range()) {
            _ += this.htmlComponent();
        }
        return _;
    }
}