type DebouncePromiseFunction<T> = (...args: any[]) => Promise<T>;

function debouncePromise<T>(func: DebouncePromiseFunction<T>, delay: number): DebouncePromiseFunction<T> {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: any[]): Promise<T> {
        return new Promise<T>((resolve) => {
            clearTimeout(timer);
            timer = setTimeout(async () => {
                const result = await func.apply(this, args);
                resolve(result);
            }, delay);
        });
    };
}

console.log("Soy mensaje sin delay, en un momento se ejecutará un mensaje con delay");

const delayedConsoleLogMessagePromise = (message: string) : Promise<string> => {
    return new Promise<string>(() => {
        console.log(message);
    })
}

const debouncedMessagePromise = debouncePromise(delayedConsoleLogMessagePromise, 2000);
debouncedMessagePromise("Soy el mensaje con delay");
