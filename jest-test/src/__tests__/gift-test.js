import { Gift, sendGift } from '../gift';
import { moduleMapper } from "../module-mapper"

jest.mock("../gift.js")

// The assertion for a promise must be returned.
it('gift', () => {
  // const fn = jest.fn()
  // fn.mockImplementation(() => "11")
  // Gift.sendGift = fn

  // 或者
  Gift.sendGift.mockImplementation(() => "22")

  let result = Gift.sendGift()
  expect(result).toEqual("22")

  result = moduleMapper.Gift.sendGift()
  expect(result).toEqual("22")
});

it('mock sendGift', () => {
  console.log("sendGift:", sendGift)

  sendGift.mockImplementation(() => "33")

  let result = Gift.sendGift()
  expect(result).toEqual("33")
});

it('moduleMapper', () => {
  const g = jest.createMockFromModule('../gift');

  g.sendGift = jest.fn((a) => a + "wa")

  moduleMapper.Gift = g

  const result = moduleMapper.Gift.sendGift("e")
  expect(result).toEqual("ewa")
});