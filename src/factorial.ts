export function factorial(number: number){
    if (number < 0) throw new Error("The number must be positive");
    if (number === 0) return 1;
    return number * factorial(number -1);
}