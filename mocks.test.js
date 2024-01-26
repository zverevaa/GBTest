const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
    return results.data;
};

it("mock return", () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true);
    const results = mock();
    expect(results).toBe(true);
});

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            post: "Mocking axios be like",
        },
    });
    const results = await fetchData(1);
    console.log(results);

    expect(results.post).toBe("Mocking axios be like");
});

it("mock deleting data", () => {
    const array = [3, 2, 1];
    const mock = jest.fn(() => {
        array.pop();
        return array;
    });
    const results = mock();
    expect(results).toHaveLength(2);
});

it("mock editing data", () => {
    const array = [3, 2, 1];
    const mock = jest.fn(() => {
        array[1] = 42;
        return array;
    });
    const results = mock();
    expect(results).toContain(42);
});

it("mock adding data", () => {
    const people = [
        { name: "John", lastName: "Doe" },
        { name: "Quick", lastName: "Silver" },
    ];
    const mock = jest.fn((array) => {
        const person = { name: "Wooly", lastName: "Socks" };
        array.push(person);
        return array;
    });

    const results = mock(people);
    console.log(results);
    expect(results).toHaveLength(3);
});
