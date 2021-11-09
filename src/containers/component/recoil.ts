import { RECOIL_KEY } from "@/constants/recoil";
import { atom } from "recoil";

export const recoilComponentTheme = atom({
  key: RECOIL_KEY.PAGES_COMPONENT_THEME, // unique ID (with respect to other atoms/selectors)
  default: {},
});
