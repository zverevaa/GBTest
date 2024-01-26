const functions = require("./script");

describe("sum", () => {
    test("Adds 2+2 to equal 4", () => {
        expect(functions.sum(2, 2)).toBe(4);
    });
    test("Adds 88+12 to equal 100", () => {
        expect(functions.sum(88, 12)).toBe(100);
    });
});

describe("isAgeAppropriate", () => {
    test("Checks if minors are allowed", () => {
        expect(() => {
            functions.isAgeAppropriate(4);
        }).toThrow("You shall not pass!");
    });

    test("Checks if age is incorrect", () => {
        expect(() => {
            functions.isAgeAppropriate(100);
        }).toThrow("Incorrect age");
    });

    test("Checks if an adult is allowed", () => {
        expect(functions.isAgeAppropriate(22)).toBe("You can come in");
    });
});

describe("returnObject", () => {
    test("Checks if an object is returned", () => {
        expect(functions.returnObject("John", "Doe")).toMatchObject({
            name: "John",
            lastName: "Doe",
        });
    });
});

describe("returnArray", () => {
    test("Checks if a specific item is in the array", () => {
        expect(functions.returnArray("banana", "lemon", "apple")).toContain(
            "apple"
        );
    });
});
