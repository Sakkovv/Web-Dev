function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = Number(prompt("x?", ""));
let n = Number(prompt("n?", ""));

if (!Number.isInteger(n) || n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer greater than zero`);
} else {
    alert(pow(x, n));
}
