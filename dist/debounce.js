"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
const debounce = (mensaje) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje);
        }, 2000);
    });
};
exports.debounce = debounce;
function probarDebounce() {
    console.log("Antes de la promesa");
    (0, exports.debounce)("Mensaje después de ejecutar la promesa")
        .then(mensaje => console.log(mensaje));
}
