import { Gift } from '../gift';
import { moduleMapper } from "../module-mapper"

jest.mock("../gift.js")

// The assertion for a promise must be returned.
it('gift', () => {
  // const fn = jest.fn()
  // fn.mockImplementation(() => "11")
  // Gift.sendGift = fn

  // 或者
  Gift.sendGift.mockImplementation(() => "22")

  const result = Gift.sendGift()
  expect(result).toEqual("22")
});

it('moduleMapper', () => {
  const g = jest.createMockFromModule('../gift');

  g.sendGift = jest.fn((a) => a + "wa")

  moduleMapper.Gift = g

  const result = moduleMapper.Gift.sendGift("e")
  expect(result).toEqual("wa")
});