"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function debouncePromise(func, delay) {
    let timer;
    return function (...args) {
        return new Promise((resolve) => {
            clearTimeout(timer);
            timer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const result = yield func.apply(this, args);
                resolve(result);
            }), delay);
        });
    };
}
console.log("Soy mensaje sin delay, en un momento se ejecutará un mensaje con delay");
const delayedConsoleLogMessagePromise = (message) => {
    return new Promise(() => {
        console.log(message);
    });
};
const debouncedMessagePromise = debouncePromise(delayedConsoleLogMessagePromise, 2000);
debouncedMessagePromise("Soy el mensaje con delay");
