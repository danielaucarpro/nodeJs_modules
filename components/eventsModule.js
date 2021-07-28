const event = require('events');
const eventEmitter = new event.EventEmitter()

const eventOne = () => {
    return(
        eventEmitter.on('Hello World', () => {
            console.log('Hi')
        })
    );
}

exports.pathModule = () => {
    return(
        `
        <h1>Event Module</h1>
        <a href="/">Back</a>
        <p>Event 1: ${eventOne()[0]}</p>
        `
    );
}