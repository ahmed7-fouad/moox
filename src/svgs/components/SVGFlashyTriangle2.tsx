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
const SVGFlashyTriangle2 = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg  viewBox="0 0 200 176" width={width} height={height} fill={fill} stroke={stroke} style={style}><LinearGradient id="flashy-triangle-2-a" x1="23.949918%" x2="89.260976%" y1="33.039437%" y2="73.030917%"><Stop offset="0" stopColor="#fecf24"/><Stop offset="1" stopColor="#fd12c9"/></LinearGradient><LinearGradient id="flashy-triangle-2-b" x1="50%" x2="17.852426%" y1="89.200201%" y2="-4.944995%"><Stop offset="0" stopColor="#00a7ff"/><Stop offset="1" stopColor="#2ce3cc"/></LinearGradient><Path d="m1278.01616 1996.61873 140.82285 128.87072-155.3046 46.39168z" fill="url(#flashy-triangle-2-a)" fillRule="evenodd" stroke="url(#flashy-triangle-2-b)" strokeWidth="8.170213" transform="matrix(.89100652 -.4539905 .4539905 .89100652 -2037.923358 -1192.577195)"/></Svg>
);
};
export default SVGFlashyTriangle2;
