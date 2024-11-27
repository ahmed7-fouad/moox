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
const SVGWebpack = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none" fillRule="evenodd" transform="translate(2)"><Path d="m13.275 0 13.2575 7.5v15l-13.2575 7.5-13.2575-7.5v-15z" fill="#fff"/><G fillRule="nonzero"><Path d="m24.165 21.9825-10.4525 5.9125v-4.605l6.5125-3.5825zm.715-.6475v-12.365l-3.825 2.2075v7.9475zm-22.5375.6475 10.4525 5.9125v-4.605l-6.5125-3.5825zm-.715-.6475v-12.365l3.825 2.2075v7.9475zm.4475-13.165 10.72-6.065v4.4525l-6.8675 3.7775-.0525.03zm22.3575 0-10.72-6.065v4.4525l6.8675 3.7775.0525.03z" fill="#8ed6fb"/><Path d="m12.795 22.2425-6.425-3.5325v-7l6.425 3.71zm.9175 0 6.425-3.5325v-7l-6.425 3.71zm-6.9075-11.3425 6.45-3.5475 6.45 3.5475-6.45 3.725z" fill="#1c78c0"/></G></G></Svg>);
};
export default SVGWebpack;
