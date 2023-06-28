"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayMessage = void 0;
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
function displayMessage(messageToDisplay) {
    console.log("Soy mensaje sin delay, en un momento se ejecutará un mensaje con delay");
    const delayedConsoleLogMessage = (message) => console.log("Mensaje con delay: " + message);
    const debouncedMessage = debounce(delayedConsoleLogMessage, 2000);
    return debouncedMessage(messageToDisplay);
}
exports.displayMessage = displayMessage;
