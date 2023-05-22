const oldLog = console.log;
let counter = 0;
console.log = (...args) => {
    oldLog(...args);
    counter += 1;
}