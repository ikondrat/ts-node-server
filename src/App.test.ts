import * as App from "./App";

it("Has express", () => {
    const app = new App.default();
    expect(app.express).toBeInstanceOf(Function);
});
