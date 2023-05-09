import { atom } from "recoil";

const bnrState = atom({
  key: "bnrState",
  default: false,
});

const animateCloseBnrState = atom({
  key: "animateCloseBnrState",
  default: false,
});

export { bnrState, animateCloseBnrState };
