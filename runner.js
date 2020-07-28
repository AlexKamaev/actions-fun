const createTestCafe = require('testcafe');

let testCafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testCafe = tc;

        return testCafe.createRunner()
            .browsers(['chrome:headless'])
            .run();
    })
    .then(() => {
        return testCafe.close();
    });
