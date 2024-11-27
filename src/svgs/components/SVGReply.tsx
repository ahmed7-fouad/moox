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
const SVGReply = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m12.5122 16.0435h-.504v4.236l-9.358-6.779 9.358-6.671v4.15h.504c7.367 0 11.769 3.863 12.39 10.749-2.766-4.363-5.888-5.727-12.39-5.685m.503-6.04-.005-5.003-12.01 8.5 12.01 8.502.005-4.975c5.999-.026 9.368 1.801 12.028 6.972l.955-.218c0-8.635-4.482-13.78-12.983-13.778" fillRule="evenodd" transform="matrix(-1 0 0 1 29 1)"/></Svg>);
};
export default SVGReply;
