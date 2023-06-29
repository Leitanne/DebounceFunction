import { debounce } from "../src/debounce";

jest.useFakeTimers();

test('Necesito saber que la promesa funciona', async ()=> {

    debounce("La funcion devuelve el mismo valor que le entra").then((message) => {
        expect(message).resolves.toBe("Hola");
    })    
});