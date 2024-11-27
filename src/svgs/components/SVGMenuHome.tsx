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
const SVGMenuHome = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m15 2a1 1 0 0 0 -.699219.2851562l-10.9082029 8.9218748a1 1 0 0 0 -.0371093.029297l-.0371094.03125v.001953a1 1 0 0 0 -.3183594.730469 1 1 0 0 0 1 1h1v11c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-11h1a1 1 0 0 0 1-1 1 1 0 0 0 -.318359-.732422l-.015625-.011719a1 1 0 0 0 -.06836-.05664l-3.597656-2.9433596v-4.2558594c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v1.8027344l-4.322266-3.5351563a1 1 0 0 0 -.677734-.2675781zm-3 14h6v8h-6z"/></Svg>);
};
export default SVGMenuHome;
