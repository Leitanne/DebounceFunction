export const debounce = (mensaje:string) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(mensaje)
        }, 2000)
    })
}

