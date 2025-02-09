let sharedObject = {};

function A() {
    return sharedObject;
}

function B() {
    return sharedObject;
}

let a = new A();
let b = new B();

console.log(a == b);
