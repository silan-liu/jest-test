jest.mock("../src/room.js")

import { getRoomInfo } from "../src/room.js"
it("room", () => {
  const res = getRoomInfo()
  expect(res.code).toBe(1)
})