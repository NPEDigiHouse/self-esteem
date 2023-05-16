import { Global } from "@mantine/core";
import PoppinsMedium from "./assets/fonts/Poppins/Poppins-Medium.ttf";

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Poppins",
            src: `url('${PoppinsMedium}') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal"
          }
        }
      ]}
    />
  );
};

export default CustomFonts;
