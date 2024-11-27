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
const SVGSketch = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none" fillRule="evenodd" transform="translate(2 4)"><Path d="m5.66129032.76685733 7.31249998-.76685733 7.3125.76685733 5.6612903 7.53859746-12.9737903 14.98621191-12.9737903-14.98621191z" fill="#fdb300"/><Path d="m5.25497917 8.3054549 7.71875003 14.9862917-12.9737292-14.9862917m20.6926628 0-7.71875 14.9862917 12.9737292-14.9862917" fill="#ea6c00" fillRule="nonzero"/><Path d="m5.25497917 8.3054549h15.43750003l-7.71875 14.9862917" fill="#fdad00"/><Path d="m12.9737292 0-7.31250003.76672917-.40625 7.53864583m7.71887243-8.305375 7.3125.76672917.40625 7.53864583" fill="#fdd231" fillRule="nonzero"/><Path d="m25.947642 8.305375-5.6612292-7.53864583.40625 7.53864583m-20.6926628 0 5.66122917-7.53864583-.40625 7.53864583" fill="#fdad00" fillRule="nonzero"/><Path d="m12.9737292 0-7.71875003 8.305375h15.43750003" fill="#feeeb7"/></G></Svg>);
};
export default SVGSketch;
