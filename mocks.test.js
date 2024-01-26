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
