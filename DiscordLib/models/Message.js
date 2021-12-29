

class Message {
    constructor(data) {
        this.tts = data.d.tts;
        this.timestamp = data.d.timestamp;
        this.referenced_message = data.d.referenced_message;
        this.pinned = data.d.pinned;
        this.mentions = data.d.mentions;
        this.mention_roles = data.d.mention_roles;
        this.mentions_everyone = data.d.mention_everyone;
        this.id = data.d.id;
        this.flags = data.d.flags;
        this.embeds = data.d.embeds;
        this.edited_timestamp = data.d.edited_timestamp;
        this.content = data.d.content;
        this.components = data.d.components;
        this.channel_id = data.d.channel_id;
        this.attachments = data.d.attachments;
        this.guild_id = data.d.guild_id;

        this.author = {
            username: data.d.author.username,
            discriminator: data.d.author.discriminator,
            nick: data.d.member.nick,
            user: `${data.d.author.username}#${data.d.author.discriminator}`,
            id: data.d.author.id,
            avatar_url: `https://cdn.discordapp.com/avatars/${data.d.author.id}/${data.d.author.avatar}.webp?size=100`,
            roles: data.d.member.roles,
            premium_since: data.d.member.premium_since,
            pending: data.d.member.pending,
            mute: data.d.member.mute,
            joined_at: data.d.member.joined_at,
            hoisted_role: data.d.member.hoisted_role,
            deaf: data.d.member.deaf,
            communication_disabled_until: data.d.member.communication_disabled_until
        }
    }
}

module.exports = { Message };