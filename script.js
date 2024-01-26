function sum(num1, num2) {
    return num1 + num2;
}

function isAgeAppropriate(age) {
    if (age < 18) {
        throw new Error("You shall not pass!");
    } else if (age < 0 && age > 99) {
        throw new Error("Incorrect age");
    } else {
        console.log("You can come in");
    }
}

const functions = {
    sum: (num1, num2) => num1 + num2,
    isAgeAppropriate: (age) => {
        if (age < 18) {
            throw new Error("You shall not pass!");
        } else if (age < 0 || age > 99) {
            throw new Error("Incorrect age");
        } else {
            return "You can come in";
        }
    },
    returnObject: (name, lastName) => {
        const person = { name: name, lastName: lastName };
        return person;
    },
    returnArray: (item1, item2, item3) => {
        return [item1, item2, item3];
    },
};

module.exports = functions;
