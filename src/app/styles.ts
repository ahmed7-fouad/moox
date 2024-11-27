import { platformColors } from "@/shared/styles/colors";
import { makeTheme } from "@/shared/styles/theme";

export const colors = {
  white: "#fff",
  black: "#1F1F1F",
};

type ThemedColors = {
  back: {
    default: string;
    dark: string;
  };
  text: {
    default: string;
    main: string;
    light1: string;
    light2: string;
    onDarkLight: string;
    onMain: string;
  };
};
export const themedColors = {
  light: {
    back: {
      default: "#fff",
      dark: "#f2f2f7",
    },
    text: {
      main: platformColors.ios.light.indigo,
      default: "#111",
      light1: platformColors.ios.light.gray,
      light2: platformColors.ios.light.gray2,
      onDarkLight: "rgba(0,0,0,0.5)",
      onMain: "#fff",
    },
  } as ThemedColors,
  dark: {
    back: {
      default: platformColors.ios.dark.gray6,
      dark: "#000",
    },
    text: {
      main: platformColors.ios.dark.indigo,
      default: "rgba(255,255,255,0.98)",
      light1: platformColors.ios.light.gray,
      light2: platformColors.ios.light.gray2,
      onDarkLight: "rgba(255,255,255,0.5)",
      onMain: "rgba(255,255,255,0.98)",
    },
  } as ThemedColors,
};

const { styles, useTheme, getWebThemeStyleSheet, getWebThemeId } =
  makeTheme(themedColors);

export { styles, useTheme, getWebThemeStyleSheet, getWebThemeId };
