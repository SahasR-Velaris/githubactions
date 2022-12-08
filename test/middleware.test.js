import middleware from "../middleware";

const validMockReq = () => {
    const req = {
        headers: {
            token: "secretpass"
        }
    }
    return req;
}

const invalidMockReq = () => {
    const req = {
        headers: {
            token: "someothervalue"
        }
    }
    return req;
}


test('Should return a valid response since the token is passed as secretpass', () => {
    const mockedReq = validMockReq();
    const mockRes = {};
    const mockedNext = jest.fn();

    middleware.validateToken(mockedReq, mockRes, mockedNext);

    expect(mockRes.statusCode).toBeUndefined();
    expect(mockRes.json).toBeUndefined();
})

test('Should return a invalid response since the token is passed as something else', () => {
    const mockedReq = invalidMockReq();
    const mockRes = {};
    const mockedNext = jest.fn();

    middleware.validateToken(mockedReq, mockRes, mockedNext);

    expect(mockRes.statusCode).toBe(403);
    // expect(mockRes.json).toBe("Access Forbidden!");
})
