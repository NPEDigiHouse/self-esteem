import * as yup from "yup";

export interface IPersonalityTestForm {
  name: string;
  class: string;
  gender: string;
  age: number;
}

export const personalityTestFormSchema = yup.object({
  name: yup.string().required("Masukkan nama terlebih dahulu"),
  class: yup.string().required("Masukkan kelas terlebih dahulu"),
  gender: yup.string().required("Masukkan jenis kelamin terlebih dahulu"),
  age: yup.string().required("Masukkan umur terlebih dahulu")
});
