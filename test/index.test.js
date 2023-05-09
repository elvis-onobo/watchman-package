import Watchman from "../src/lib";

jest.mock("../lib")

it('Should post an error to the error endpoint', () => {
    const watchman = new Watchman("wm_hbhsahjdbhcvhuiqwkubcqkjbcn", "dev");
    watchman.capture({
        "message": "Cannot read property 'foo' of undefined",
        "name": "TypeError",
        "stack": "TypeError: Cannot read property 'foo' of undefined\n    at myFunction (/path/to/file.js:12:23)\n    at /path/to/otherfile.js:23:7",
        "fileName": "/path/to/file.js",
        "lineNumber": 12,
        "columnNumber": 23
    })
    expect(watchman.capture).toHaveBeenCalledTimes(1);
});