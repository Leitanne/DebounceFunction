type DebFunction = (...args: any[]) => void;

function debounce(func: DebFunction, delay: number): DebFunction{
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);

  }
}
console.log("Soy mensaje sin delay, en un momento se ejecutará un mensaje con delay");
const delayedConsoleLogMessage = (message: string) => console.log("Mensaje con delay: "+message);  
const debouncedMessage = debounce(delayedConsoleLogMessage, 2000);
debouncedMessage("Soy el mensaje con delay");
