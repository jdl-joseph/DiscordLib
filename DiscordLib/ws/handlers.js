const { Message } = require("../models/Message.js");


function ready(client, data) {
    data = data.d.user;

    client.username = data.username;
    client.discriminator = data.discriminator;
    client.user = `${data.username}#${data.discriminator}`;
    client.id = data.id;
    client.avatar_url = `https://cdn.discordapp.com/avatars/${data.id}.webp?size=100`;

    client.emit('ready');
}

function message_create(client, data) {
    client.emit('message', new Message(data));
}


module.exports = { ready, message_create };