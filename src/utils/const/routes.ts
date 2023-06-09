import { NavbarMenuType } from "./types";

interface IROUTES {
  home : NavbarMenuType;
  anxietyTest: NavbarMenuType;
  anxietyClass: NavbarMenuType;
  deril: NavbarMenuType
}

export const ROUTES : IROUTES = {
  home: "",
  anxietyTest: "tes-kecemasan",
  anxietyClass: "tingkat-kecemasan",
  deril: "tes-deril"
}