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
const SVGPutaindecode = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><LinearGradient id="putaindecode-a" x1="50%" x2="50%" y1="0%" y2="100%"><Stop offset="0" stopColor="#e51d58"/><Stop offset="1" stopColor="#cc0613"/></LinearGradient><G fill="none" fillRule="evenodd"><Path d="m0 0h30v30h-30z" fill="url(#putaindecode-a)"/><G fill="#fff" transform="translate(6 6)"><Path d="m6.60128752 9.35985394-6.15128752-2.79927v-2.96058394l9 4.70656942v2.29635018l-9 4.6970804v-2.9510948l6.15128752-2.79927007z"/><Path d="m14.85 0h2.7v18h-2.7z"/></G></G></Svg>
);
};
export default SVGPutaindecode;
