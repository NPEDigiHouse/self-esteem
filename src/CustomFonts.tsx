import { Global } from "@mantine/core";
import RobotoMedium from "./assets/fonts/Roboto/Roboto-Medium.ttf";

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Roboto",
            src: `url('${RobotoMedium}') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal"
          }
        }
      ]}
    />
  );
};

export default CustomFonts;
