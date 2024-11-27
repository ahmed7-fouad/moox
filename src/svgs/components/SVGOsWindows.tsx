import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan as Tspan,
  Use,
} from 'react-native-svg'
type ReactFromSVGProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: any;
};;
const SVGOsWindows = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 50 50" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m46 4.867188-42 5.25v29.765625l42 5.25zm-2 2.265625v16.867187h-19v-14.492187zm-21 2.625v14.242187h-17v-12.117187zm-17 16.242187h17v14.242188l-17-2.125zm19 0h19v16.867188l-19-2.375z"/></Svg>);
};
export default SVGOsWindows;
