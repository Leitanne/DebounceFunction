const debounce = (delay, callback) => {
    return function(...args) {
        new Promise((resolve) => {
            setTimeout(() => {
                callback(...args);
            }, delay);
        });
    };
}

const mensaje = document.getElementById("mensaje");

document.getElementById('imprimir')?.addEventListener('click', debounce(1500, () => {
    mensaje.innerHTML += 'Soy el mensaje con delay ';
}), false);