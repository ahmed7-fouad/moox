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
const SVGFlow = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none" fillRule="evenodd" transform="translate(3 2)"><Path d="m23.0958103 11.201581-8.6437154-8.64268772h8.6437154z" fill="#ffca20" opacity="0.7"/><Path d="m8.39810277 0h4.89992093l3.7448221 3.74379447h-8.64474303z" fill="#ffca20" opacity="0.7"/><Path d="m8.67865613 8.64474308-8.64371542-8.64474308h10.39280629v8.64371542zm7.59343877 8.64268772 8.6437154 8.6437154h-8.6437154z" fill="#ffcf39" fillRule="nonzero" opacity="0.9"/><Path d="m10.427747 17.2884585-8.64268771-8.64474308h8.64371541v8.64371538zm9.3086166-4.3747826-6.8905138-6.89462452h6.8935968zm.8056917 12.2128063-7.8390513-7.8380237h7.8390513z" fill="#ffe490" fillRule="nonzero" opacity="0.7"/><Path d="m10.427747 6.88537549-6.88537546-6.88537549h6.88537546z" fill="#fcbc7c" opacity="0.9"/><Path d="m12.7379447 17.2874308 8.6437154 8.6437154h-8.6437154z" fill="#f9a040" opacity="0.8"/><Path d="m21.4864822 20.7383399-8.6324111-8.632411h8.6324111z" fill="#f9a040" opacity="0.7"/><Path d="m12.8458498 6.01905138 8.5388933 8.53889332h-8.5388933z" fill="#ffcf39" opacity="0.9"/><Path d="m10.427747 25.8972332-10.427747-10.4298024h10.427747z" fill="#ffc737" opacity="0.7"/></G></Svg>
);
};
export default SVGFlow;
