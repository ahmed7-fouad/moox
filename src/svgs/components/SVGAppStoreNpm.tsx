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
const SVGAppStoreNpm = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 28 28" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none"><Rect fill="#cb3837" height="28" rx="2" width="28"/><Path d="m6 21.9898219h8l.0101781-11.9796438h3.9898219l-.0101781 11.9898219h4l.0101781-15.97964377-15.97964377-.02035623z" fill="#fff"/></G></Svg>
);
};
export default SVGAppStoreNpm;
