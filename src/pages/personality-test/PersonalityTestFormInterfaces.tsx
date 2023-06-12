import * as yup from "yup";

export interface IPersonalityTestForm {
  name: String;
  gender: String;
  school: String;
  birthDate: any;
}

export const personalityTestFormSchema = yup.object({
  name: yup.string().required("Masukkan nama terlebih dahulu"),
  gender: yup.string().required("Masukkan jenis kelamin terlebih dahulu"),
  school: yup.string().required("Masukkan asal instansi terlebih dahulu"),
  birthDate: yup.string().required("Masukkan tanggal lahir terlebih dahulu")
});
