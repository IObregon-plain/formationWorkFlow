const utils = {
    greetings: to => {
        if(!to){
            return 'Hello, world!'
        }
        return `Hello, ${to}`;
    }
}

module.exports = utils;