import { NavbarMenuType } from "./types";

interface IROUTES {
  home : NavbarMenuType;
  anxietyTest: NavbarMenuType;
  anxietyClass: NavbarMenuType;
  deril: NavbarMenuType
}

export const ROUTES : IROUTES = {
  home: "",
  anxietyTest: "kuesioner-keberhargaan-diri",
  anxietyClass: "tingkat-keberhargaan-diri",
  deril: "tingkat-keberhargaan-diri"
}