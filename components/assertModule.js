const assert = require('assert');
let x = 12;
let y = 15;

const assertValue = () => {
    return(
        assert(x === y)
    );
}

const deepEqualAssert = () => {
    return(
        assert.deepEqual(x, y)
    );
}

exports.assertModule = () => {
    return(
        `
        <h1>Assert Module</h1>
        <a href="/">Back</a>
        <p>Assert: ${assertValue()}</p>
        <p>Deep Equal: ${deepEqualAssert()}</p>
        `
    );
}