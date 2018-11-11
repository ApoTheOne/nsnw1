const https = require('https');

module.exports = class DadJokes {
    constructor() {}

    getJoke(callback) {
        var options = {
            host: 'icanhazdadjoke.com',
            port: 443,
            path: '/',
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        https
            .get(options, res => {
                var jokeData = '';

                res.on('data', data => {
                    jokeData += data;
                });

                res.on('end', () => {
                    console.log(jokeData);
                    const jokeResponse = JSON.parse(jokeData);
                    if (jokeResponse.status === 200) {
                        callback('', jokeResponse.joke);
                    }
                });
            })
            .on('error', e => {
                console.error(e);
            });
    }

    async getJokeAsync() {
        let joke = {};
        try {
            joke = await pHttps('https://icanhazdadjoke.com/');
            console.log(joke);
        } catch (error) {
            console.log(error);
        }
        //return JSON.stringify(joke);
        return 'joke';
    }
};
