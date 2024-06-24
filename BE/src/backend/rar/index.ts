const express = require('express');
type Express = InstanceType<typeof express>;

export class Rar {
    constructor() {

    }

    registerRoutes(app: Express) {
        app.post('/api/exh', (req, res) => {
            const requestBody = req.body;
            console.log(requestBody);

            res.cookie('sessionToken', 'myvalue', {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                path: '/'
            });
            res.json({ message: 'This is the /exh route' });
        });
    }
}
