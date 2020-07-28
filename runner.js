const createTestCafe = require('testcafe');

let testCafe = null;

console.log('test');

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        console.log('1');

        testCafe = tc;

        return testCafe.createRunner()
            .browsers(['chrome:headless'])
            .run();
    })
    .then(() => {
        console.log('2');

        return testCafe.close();
    });
