import { getRoomInfo } from "./room"

export function logRoomInfo() {
  const res = getRoomInfo()
  return "roomInfo:" + res.code
}