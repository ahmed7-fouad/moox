import * as React from "react";
import { View, ViewProps } from "react-native";

import {
  horizontalSpaceStyle,
  Size,
  verticalSpaceStyle,
} from "@/shared/styles";

const SpacedView = ({
  vertical,
  horizontal,
  style,
  children,
  ...props
}: ViewProps & {
  vertical?: Size;
  horizontal?: Size;
}) => (
  <View
    {...props}
    style={[
      verticalSpaceStyle(vertical),
      horizontalSpaceStyle(horizontal),
      style,
    ]}
  >
    {children}
  </View>
);

export default SpacedView;
