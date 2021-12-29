

class BaseRequestHandler {
    constructor() {
        this.base_url = 'https://discord.com/api/v6';
    }

    async get(endpoint, headers) {
        const response = fetch(`${this.base_url}${endpoint}`, {
            method: 'GET',
            headers
        });

        return response;
    }

    async post(endpoint, headers, payload) {
        const response = fetch(`${this.base_url}${endpoint}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });

        return response;
    }

    async put(endpoint, headers, payload) {
        const response = fetch(`${this.base_url}${endpoint}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(payload)
        });

        return response;
    }

    async patch(endpoint, headers, payload) {
        const response = fetch(`${this.base_url}${endpoint}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(payload)
        });

        return response;
    }

    async delete(endpoint, headers) {
        const response = fetch(`${this.base_url}${endpoint}`, {
            method: 'DELETE',
            headers
        });

        return response;
    }
}

module.exports = { BaseRequestHandler };