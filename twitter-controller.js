'use strict';

var Twitter = require('twitter');
var config = require('./config');

var client = new Twitter(config);
module.exports = class TwitterController {
    constructor() {}

    postJokeOnTwitter(error, joke) {
        if (error) {
            console.log(error);
            return null;
        }
        const tweet = client.post(
            'statuses/update',
            {
                status:
                    joke +
                    ' #noServerNovember https://github.com/ApoTheOne/nsnw1'
            },
            (err, params) => {
                if (err) {
                    console.log(err);
                    return null;
                }
                console.log(params);
            }
        );
    }

    async postJokeOnTwitterAsync(joke) {
        try {
            const tweet = await client.post('statuses/update', {
                status: joke
            });
            console.log(tweet);
        } catch (error) {
            console.log(error);
        }
    }
};
