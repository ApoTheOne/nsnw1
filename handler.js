'use strict';
const twitter = require('./twitter-controller');
const jokes = require('./dadJokes');

module.exports.tweetDadJoke = async (event, context) => {
    const dadJokes = new jokes();
    const tweeter = new twitter();
    dadJokes.getJoke(tweeter.postJokeOnTwitter);
};
