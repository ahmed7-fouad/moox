import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
    // paddingHorizontal:(Spacer.space /. 4.)->dp,
  },
});

export default function Container({
  wrapperStyle,
  style,
  maxWidth = 840,
  children,
}: {
  wrapperStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  maxWidth?: number;
  children: React.ReactNode;
}) {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.container, { maxWidth }, style]}>{children}</View>
    </View>
  );
}
