jest.mock("../bridge")

import { invoke } from "../dispatch"

describe("invoke", () => {
  it("invoke", () => {
    const result = invoke(2)
    expect(result).toBe(4)
  })
})