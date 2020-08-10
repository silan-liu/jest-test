const { TestScheduler } = require("jest");
jest.mock("../room.js")

import { getRoomInfo } from "../room"
it("room", () => {
  const res = getRoomInfo()
  expect(res.code).toBe(1)
})