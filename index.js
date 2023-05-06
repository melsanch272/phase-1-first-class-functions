const receivesAFunction = callback => callback ()

function returnsANamedFunction(named) {
    return function receivesAFunction() {named};
}

function returnsAnAnonymousFunction (anonymous) {
    return function () {anonymous};
}