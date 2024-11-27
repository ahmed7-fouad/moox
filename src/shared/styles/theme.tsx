import * as React from "react";
import {
  Platform,
  StyleSheet,
  TextStyle,
  useColorScheme,
  ViewStyle,
} from "react-native";
import { match } from "ts-pattern";

type acceptedMode = "light" | "dark" | "auto";
type t = "light" | "dark";
// type barStyle = "lightContent" | "darkContent";

type ColorMap = Record<string, string>;

type ThemeColors<TBack extends ColorMap, TText extends ColorMap> = {
  back: TBack;
  text: TText;
};
type ThemedColors<TBack extends ColorMap, TText extends ColorMap> = {
  light: ThemeColors<TBack, TText>;
  dark: ThemeColors<TBack, TText>;
};

type ThemeStyleSheet<TBack extends ColorMap, TText extends ColorMap> = {
  back: Record<keyof TBack, ViewStyle>;
  text: Record<keyof TText, TextStyle>;
};
type ThemedStyleSheet<TBack extends ColorMap, TText extends ColorMap> = {
  light: ThemeStyleSheet<TBack, TText>;
  dark: ThemeStyleSheet<TBack, TText>;
};

type Theme<TBack extends ColorMap, TText extends ColorMap> = {
  mode: t;
  styles: ThemeStyleSheet<TBack, TText>;
  colors: ThemeColors<TBack, TText>;
};

export function makeTheme<TBack extends ColorMap, TText extends ColorMap>(
  themedColors: ThemedColors<TBack, TText>
) {
  const styles: ThemedStyleSheet<TBack, TText> = {
    light: {
      back: Object.fromEntries(
        Object.entries(themedColors.light.back).map(([key, value]) => [
          key,
          { backgroundColor: value },
        ])
      ) as Record<keyof TBack, ViewStyle>,
      text: Object.fromEntries(
        Object.entries(themedColors.light.text).map(([key, value]) => [
          key,
          { color: value },
        ])
      ) as Record<keyof TText, TextStyle>,
    },
    dark: {
      back: Object.fromEntries(
        Object.entries(themedColors.dark.back).map(([key, value]) => [
          key,
          { backgroundColor: value },
        ])
      ) as Record<keyof TBack, ViewStyle>,
      text: Object.fromEntries(
        Object.entries(themedColors.dark.text).map(([key, value]) => [
          key,
          { color: value },
        ])
      ) as Record<keyof TText, TextStyle>,
    },
  };

  const htmlKey = "multiversal";
  const htmlId = htmlKey + "--root";
  const htmlCssId = htmlKey + "-css";

  let webCss = "";
  // @todo implement for iOS using DynamicColorIOS & similar for Android
  // when and if necessary
  let webDynamicColors = themedColors.light;
  if (Platform.OS === "web") {
    const prefix = `--${htmlKey}-theme-`;
    webCss = `
      .${htmlId} {
        ${Object.entries(themedColors.light.back)
          .map(([key, value]) => `${prefix}back-${key}: ${value};`)
          .join("\n")}
        ${Object.entries(themedColors.light.text)
          .map(([key, value]) => `${prefix}text-${key}: ${value};`)
          .join("\n")}
      }
      @media (prefers-color-scheme: dark) { .${htmlId} {
        ${Object.entries(themedColors.dark.back)
          .map(([key, value]) => `${prefix}back-${key}: ${value};`)
          .join("\n")}
        ${Object.entries(themedColors.dark.text)
          .map(([key, value]) => `${prefix}text-${key}: ${value};`)
          .join("\n")}
      } }
      `;
    webDynamicColors = {
      back: Object.fromEntries(
        Object.entries(themedColors.light.back).map(([key]) => [
          key,
          `var(${prefix}back-${key})`,
        ])
      ) as TBack,
      text: Object.fromEntries(
        Object.entries(themedColors.light.text).map(([key]) => [
          key,
          `var(${prefix}text-${key})`,
        ])
      ) as TText,
    };
  }
  const webDynamicStyles: ThemeStyleSheet<TBack, TText> = {
    back: Object.fromEntries(
      Object.entries(webDynamicColors.back).map(([key, value]) => [
        key,
        { backgroundColor: value },
      ])
    ) as Record<keyof TBack, ViewStyle>,
    text: Object.fromEntries(
      Object.entries(webDynamicColors.text).map(([key, value]) => [
        key,
        { color: value },
      ])
    ) as Record<keyof TText, TextStyle>,
  };

  const themeLight: Theme<TBack, TText> = {
    mode: "light" as t,
    styles: StyleSheet.create(styles.light),
    colors: themedColors.light,
  };
  const themeDark: Theme<TBack, TText> = {
    mode: "dark" as t,
    styles: StyleSheet.create(styles.dark),
    colors: themedColors.dark,
  };

  const getWebThemeStyleSheet = () => (
    <style
      key={htmlCssId}
      id={htmlCssId}
      dangerouslySetInnerHTML={{ __html: webCss }}
    />
  );
  const getWebThemeId = () => htmlId;

  const useTheme = function useTheme(
    // @todo switch to just "auto" when dark mode is ready
    currentMode: acceptedMode = process.env.NODE_ENV === "production"
      ? "light"
      : "auto"
  ): Theme<TBack, TText> {
    const colorScheme =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      typeof window === "undefined" ? undefined : useColorScheme();
    const mode = match<acceptedMode, t>(currentMode)
      .with("auto", () =>
        match(colorScheme)
          .with("dark", (): t => "dark")
          .otherwise((): t => "light")
      )
      .with("light", () => "light")
      .with("dark", () => "dark")
      .exhaustive();

    if (currentMode === "auto" && Platform.OS === "web") {
      return {
        mode,
        styles: StyleSheet.create(webDynamicStyles),
        colors: webDynamicColors,
      };
    } else {
      return mode === "light" ? themeLight : themeDark;
    }
  };

  return {
    styles,
    useTheme,
    getWebThemeStyleSheet,
    getWebThemeId,
  };
}
