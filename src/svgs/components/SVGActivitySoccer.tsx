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
const SVGActivitySoccer = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m17.5 2a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm-3.505859 6c-.458639.0032252-.916213.0807338-1.355469.234375l-2.7539064.9628906a1.0001 1.0001 0 0 0 -.5273437.4296875l-2.2148438 3.6757809a1.0005206 1.0005206 0 1 0 1.7148438 1.03125l.5332031-.886718 1.339844-2.150391 2.08789-.523437-2.9687496 7.027343.0019531.00586-.7714844 1.798828a1.0009551 1.0009551 0 0 0 1.7695309.921875 1.0009551 1.0009551 0 0 0 .00586-.007813l2.55664-3.34375-2.345703 8.464844a1.0007512 1.0007512 0 0 0 1.857422.744141l5-12a1.0001 1.0001 0 0 0 .066406-.220704l.769532-1.855468 5.630859 3.302734.021484.015625a1.0001 1.0001 0 1 0 1.175782-1.617187l-5.9375-4.3125004a1.0001 1.0001 0 0 0 -.271485-.140625l-4.02539-1.3417968c-.441033-.147011-.900737-.218069-1.359375-.2148438zm-7.494141 14a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5z"/></Svg>);
};
export default SVGActivitySoccer;
