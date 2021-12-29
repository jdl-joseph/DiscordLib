const { Embed } = require('../models/Embed.js');
const { BaseRequestHandler } = require('./BaseRequestHandler.js');


class EndpointsHandler {
    constructor() {
        this.token = null;
        this.requestHandler = new BaseRequestHandler();

        this.headers = {
            authorization: `Bot ${this.token}`
        };
    }

    async sendMessage(content, channel_id) {
        if(typeof content === 'string') {
            let endpoint = `/${channel_id}/messages`;
            let payload = {
                content: content
            };

            await this.requestHandler.post(endpoint, this.headers, payload);
        }
    }

    sendDirectMessage(content, recipient_id) {

    }
}

module.exports = { EndpointsHandler };