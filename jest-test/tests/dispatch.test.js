import { invoke } from "../src/utils/dispatch"

describe("invoke", () => {
  it("invoke", () => {
    const result = invoke(2)
    expect(result).toBe(2)
  })
})