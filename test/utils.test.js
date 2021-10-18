const { greetings } = require('../lib/utils');
const assert = require('assert');

describe('Utils', function(){
    describe('greetings', function(){
        it('Greets the default value if not arguments given', function(){
            const result = greetings();
            assert.equal(result, 'Hello, world!');
        });

        it('Greets the person if arguments given', function(){
            const result = greetings('pepe');
            assert.equal(result, 'Hello, pepe!');
        })
    })
});