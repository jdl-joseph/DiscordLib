const ws = require("ws");

const { ready, message_create } = require("./handlers.js");


class WebSocketManager {
    constructor(client) {
        this.client = client;
        this.wsc = new ws("wss://gateway.discord.gg/?v=6&encoding=json");
    }

    async connect(token) {
        this.wsc.on('open', async () => {
            await this.identify(token);

            this.wsc.on('message', async msg => {
                let resp = JSON.parse(msg);
                await this.handle_response(resp);
            });
        });
    }

    async handle_response(data) {
        switch(data.op) {
            // Heartbeat interval received
            case 10:
                let interval = data.d.heartbeat_interval;
                await this.heartbeat(interval);
                break;
            // Invalid session
            case 9:
                console.log("Invalid gateway session. Please try again.");
                break;
            // Event was fired
            case 0:
                switch(data.t) {
                    case "READY":
                        ready(this.client, data);
                        break;
                    case "MESSAGE_CREATE":
                        message_create(this.client, data);
                        // console.log(data);
                }
                break;
        }
    }

    async identify(token) {
        let identify_payload = {
            op: 2,
            d: {
                token: token,
                properties: {
                    $os: process.platform,
                    $browser: "discord-lib",
                    $device: "discord-lib"
                }
            }
        };
        
        this.wsc.send(JSON.stringify(identify_payload));
        // console.log("identified");
    }

    async heartbeat(interval) {
        let heartbeat_payload = {
            op: 1,
            d: null
        };

        setInterval(() => {
            this.wsc.send(JSON.stringify(heartbeat_payload));
            // console.log("heartbeat sent");
        }, interval);
    }
}

module.exports = { WebSocketManager };