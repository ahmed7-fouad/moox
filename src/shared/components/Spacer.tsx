import { StyleProp, View, ViewStyle } from "react-native";

import { AbsoluteSize, squareStyle } from "@/shared/styles";

const Spacer = ({
  size = "m",
  style,
}: {
  size?: AbsoluteSize;
  style?: StyleProp<ViewStyle>;
}) => <View style={[squareStyle(size), style]} />;

export default Spacer;
