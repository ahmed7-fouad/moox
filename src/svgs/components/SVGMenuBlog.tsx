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
const SVGMenuBlog = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m6 4c-1.105 0-2 .895-2 2v18c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2v-18c0-1.105-.895-2-2-2zm6 4c.553 0 1 .447 1 1v2h4v-2c0-.553.447-1 1-1s1 .447 1 1v2h2c.553 0 1 .447 1 1s-.447 1-1 1h-2v4h2c.553 0 1 .447 1 1s-.447 1-1 1h-2v2c0 .553-.447 1-1 1s-1-.447-1-1v-2h-4v2c0 .553-.447 1-1 1s-1-.447-1-1v-2h-2c-.553 0-1-.447-1-1s.447-1 1-1h2v-4h-2c-.553 0-1-.447-1-1s.447-1 1-1h2v-2c0-.553.447-1 1-1zm1 5v4h4v-4z"/></Svg>);
};
export default SVGMenuBlog;
