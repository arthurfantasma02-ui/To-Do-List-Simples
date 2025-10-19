import { atom } from "recoil";

export const taskListState = atom({
  key: "taskListState", // nome único do átomo
  default: [], // começa vazio
});
