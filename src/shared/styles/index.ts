import { useWindowDimensions } from "react-native";
import { match } from "ts-pattern";

const baseSpace = 16;
const space = baseSpace;

export type AbsoluteSize =
  | undefined
  | number
  | "xxxl"
  | "xxl"
  | "xl"
  | "l"
  | "m"
  | "s"
  | "xs"
  | "xxs"
  | "xxxs";

export type Size =
  | AbsoluteSize
  | "-xxxl"
  | "-xxl"
  | "-xl"
  | "-l"
  | "-m"
  | "-s"
  | "-xs"
  | "-xxs"
  | "-xxxs";

export const size = (s: Size): number => {
  if (typeof s === "number") {
    return s;
  }
  return match(s)
    .with("xxxl", () => space * 4)
    .with("xxl", () => space * 3)
    .with("xl", () => space * 2)
    .with("l", () => space * 1.5)
    .with("m", () => space * 1)
    .with("s", () => space * 0.75)
    .with("xs", () => space * 0.5)
    .with("xxs", () => space * 0.25)
    .with("xxxs", () => space * 0.125)
    .with("-xxxl", () => -(space * 4))
    .with("-xxl", () => -(space * 3))
    .with("-xl", () => -(space * 2))
    .with("-l", () => -(space * 1.5))
    .with("-m", () => -(space * 1))
    .with("-s", () => -(space * 0.75))
    .with("-xs", () => -(space * 0.5))
    .with("-xxs", () => -(space * 0.25))
    .with("-xxxs", () => -(space * 0.125))
    .with(undefined, () => 0)
    .exhaustive();
};

export const squareStyle = (s: number | AbsoluteSize) => {
  const v = typeof s !== "number" ? size(s) : s;
  return { width: v, height: v };
};
export const horizontalSpaceStyle = (s: number | Size) => {
  const v = typeof s !== "number" ? size(s) : s;
  return v > 0 ? { paddingHorizontal: v } : { marginHorizontal: v };
};
export const verticalSpaceStyle = (s: number | Size) => {
  const v = typeof s !== "number" ? size(s) : s;
  return v > 0 ? { paddingVertical: v } : { marginVertical: v };
};

export enum WindowSize {
  xxs,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  xxxl,
}
export const useWindowSize = (): WindowSize => {
  const { width } = useWindowDimensions();
  if (width < 320) return WindowSize.xxs;
  if (width < 480) return WindowSize.xs;
  if (width < 768) return WindowSize.s;
  if (width < 1024) return WindowSize.m;
  if (width < 1280) return WindowSize.l;
  if (width < 1440) return WindowSize.xl;
  if (width < 1920) return WindowSize.xxl;
  return WindowSize.xxxl;
};

type responsiveSpacing = {
  rxxl: AbsoluteSize;
  rxl: AbsoluteSize;
  rl: AbsoluteSize;
  rm: AbsoluteSize;
};
export const useResponsiveSpacing = (): responsiveSpacing => ({
  rxxl: useWindowSize() >= WindowSize.l ? "xxl" : "l",
  rxl: useWindowSize() >= WindowSize.l ? "xl" : "m",
  rl: useWindowSize() >= WindowSize.l ? "l" : "m",
  rm: useWindowSize() >= WindowSize.l ? "m" : "s",
});

// do not put any colors here, use useTheme() instead
// export const globalStyles = StyleSheet.create({
// });

// export const useDynamicStyles = () => {
//   const theme = useTheme();
//   return React.useMemo(() => {
//     const styles = {
//     };
//     return StyleSheet.create(styles);
//   }, [theme]);
// };
