const server = require("./server");
const db = require("../data/dbconfig");
const request = require("supertest");

// describe("", () => {
//   test("that tests can pass/fail", () => {
//     expect(2 + 2).toBe(4);
//   });
// });

// beforeAll(async () => {
//   await db.migrate.rollback();
//   await db.migrate.latest();
// });

describe("server.js tests", () => {
  test("returns status code: 200, async", async () => {
    let res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  test("should return {test: test value}", async () => {
    let res = await request(server).get("/")
    expect(res.body[0]).toEqual({ id: 1, name: 'BrianReeee' });
  });
});
