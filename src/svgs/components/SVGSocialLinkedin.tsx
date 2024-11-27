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
const SVGSocialLinkedin = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m27.2727273 0h-24.54545457c-1.50681818 0-2.72727273 1.22045455-2.72727273 2.72727273v24.54545457c0 1.5068182 1.22045455 2.7272727 2.72727273 2.7272727h24.54545457c1.5068182 0 2.7272727-1.2204545 2.7272727-2.7272727v-24.54545457c0-1.50681818-1.2204545-2.72727273-2.7272727-2.72727273zm-17.79000003 24.5454545h-4.02272727v-12.9436363h4.02272727zm-2.05227272-14.79409086c-1.29681819 0-2.34545455-1.05136364-2.34545455-2.34545455s1.05-2.34409091 2.34545455-2.34409091c1.29272727 0 2.3440909 1.05136364 2.3440909 2.34409091 0 1.29409091-1.05136363 2.34545455-2.3440909 2.34545455zm17.12045455 14.79409086h-4.02v-6.2945454c0-1.5013636-.0272727-3.4322727-2.0904546-3.4322727-2.0931818 0-2.415 1.635-2.415 3.3231818v6.4036363h-4.02v-12.9436363h3.859091v1.7686363h.0545454c.5372727-1.0172727 1.8490909-2.0904545 3.8059091-2.0904545 4.0731818 0 4.8259091 2.6809091 4.8259091 6.1663636z"/></Svg>);
};
export default SVGSocialLinkedin;
