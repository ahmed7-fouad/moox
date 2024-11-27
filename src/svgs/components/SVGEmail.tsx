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
const SVGEmail = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 24 24" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m12 12.713-11.985-9.713h23.971zm-5.425-1.822-6.575-5.329v12.501zm10.85 0 6.575 7.172v-12.501zm-1.557 1.261-3.868 3.135-3.868-3.135-8.11 8.848h23.956z"/></Svg>);
};
export default SVGEmail;
