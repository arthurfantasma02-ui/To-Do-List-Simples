import { atom } from "recoil";

export const filterState = atom({
  key: "filterState",
  default: "all", // valores possíveis: "all", "completed", "pending"
});
