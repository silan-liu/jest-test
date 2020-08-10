
jest.mock("../room.js")

import { logRoomInfo } from "../log"

describe("log", () => {
  it("log", () => {
    const log = logRoomInfo()
    expect(log).toBe("roomInfo:1")
  })
})