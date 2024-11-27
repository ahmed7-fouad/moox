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
const SVGCommandLine = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m2 0c-1.105 0-2 .895-2 2v3 16c.00005522.5522619.44773812.9999448 1 1h22c.5522619-.0000552.9999448-.4477381 1-1v-17-2c0-1.105-.895-2-2-2zm0 5h20v15h-20zm6.10417296 10.660625c1.23920645-.189375 1.98138704-1.008125 1.98082724-2.246875 0-1.09375-.54628066-1.70375-1.81459222-2.001875l-.76065112-.180625c-.73882227-.175625-1.04050803-.425-1.04050803-.859375 0-.536875.43713651-.87875 1.09759885-.87875.63807378 0 1.10207655.370625 1.16308536.9275h1.24200501c-.03414254-1.083125-.77296481-1.875-1.86776509-2.073125v-1.3475h-1.11942768v1.349375c-1.12726368.201875-1.84033911 1.005625-1.84033911 2.149375 0 1.074375.56363184 1.743125 1.71384378 2.011875l.82221964.195c.77408424.185625 1.08864342.444375 1.08864342.89375 0 .531875-.4852719.903125-1.17204079.903125-.74329998 0-1.25935614-.36625-1.32036495-.9375h-1.27670727c.04197854 1.1475.7925548 1.921875 1.98474528 2.099375v1.335625h1.11942768z" transform="translate(3 4)"/></Svg>);
};
export default SVGCommandLine;
