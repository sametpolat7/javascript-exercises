onmessage = (event) => {
    console.log("Hello from main.js: ", event.data);
    const result = event.data.toUpperCase();

    postMessage(result);
}