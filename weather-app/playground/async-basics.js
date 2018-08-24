console.log(`Starting App`);

setTimeout(() => {
    console.log(`Inside callback`);
}, 2000);

setTimeout(() => {
    console.log(`Second Callback`);
}, 0);

setTimeout(() => {
    console.log(`third Callback`);
}, 1000);

console.log(`Finishing App`);