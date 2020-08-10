import { DYBridge } from "./bridge"

export function invoke(num) {
  const result = DYBridge.dispatch(num)
  return result
}