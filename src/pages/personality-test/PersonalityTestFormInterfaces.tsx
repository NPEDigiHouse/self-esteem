import * as yup from "yup";

export interface IPersonalityTestForm {
  name: string
}

export const personalityTestFormSchema = yup.object({
  name: yup.string().required('Masukkan nama terlebih dahulu')
});
