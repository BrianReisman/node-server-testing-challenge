const Model = require("./model");
const db = require("../data/dbconfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("test").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("model test", () => {
  test("should insert 1", async () => {
    await Model.insert({ name: "BrianReeee" });

    const user = await db("test");
    console.log(user.length);
    expect(user.length).toEqual(1);
  });
});
