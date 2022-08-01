import {factorial} from "../factorial";

describe("The factorial function", () => {
    it("only accepts positive numbers", () => {
        expect(() => factorial(-5)).toThrow("The number must be positive");
    });
    it("multiplies all the numbers between a number and the number 1", () => {
        expect(factorial(1)).toEqual(1);
        expect(factorial(2)).toEqual(2);
        expect(factorial(3)).toEqual(6);
        expect(factorial(8)).toEqual(40320);
    });
});