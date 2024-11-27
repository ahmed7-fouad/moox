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
const SVGSocialX = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg  viewBox="0 0 300 301" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m178.57 127.15 111.7-127.15h-26.46l-97.03 110.38-77.44-110.38h-89.34l117.13 166.93-117.13 133.32h26.46l102.4-116.59 81.8 116.59h89.34zm-142.56-107.61h40.65l187.13 262.13h-40.66z"/></Svg>);
};
export default SVGSocialX;
