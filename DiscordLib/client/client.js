const { WebSocketManager } = require("../ws/WebSocketManager.js");
const { EndpointsHandler } = require("../rest/EndpointsHandler.js");

const EventEmitter = require("events");


class Client extends EventEmitter {
    
    constructor(token) {
        super();

        this.__ws = new WebSocketManager(this);
        this.__rest = new EndpointsHandler();

        this.__token = token;
        this.__rest.token = this.__token;
        
        this.username = null;
        this.discriminator = null;
        this.user = null;
        this.id = null;
        this.avatar_url = null;
    }

    login () {
        try {
            this.__ws.connect(this.__token);
        } catch(e) {
            console.log(e);
        }
    }

    sendMessage(content, channel_id) {
        this.__rest.sendMessage(content, channel_id);
    }
}

module.exports = { Client };