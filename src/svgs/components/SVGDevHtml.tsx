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
const SVGDevHtml = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 512 512" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none"><G transform="translate(76 104)"><Path d="m32.7453142 367.338843-32.7453142-367.338843h360l-32.745314 367.140497-147.552371 40.859503z" fill="#e44d26"/><Path d="m180 376.76033v-346.6115696h147.155458l-28.081588 313.3884296z" fill="#f16529"/><Path d="m66.8798236 75.0743803h113.1201764v45.0247927h-63.70452l4.167585 46.115703h59.536935v44.92562h-100.8158765m1.9845645 22.61157h45.248071l3.175303 36 50.407938 13.487603v47.008265l-92.4807056-25.785124" fill="#ebebeb"/><Path d="m292.723264 75.0743803h-112.92172v45.0247927h108.754134m-4.068357 46.115703h-104.685777v45.024794h55.567806l-5.259096 58.512397-50.30871 13.487602v46.809919l92.282249-25.586778" fill="#fff"/></G><Path d="m76 0h27.982426v27.7565217h25.792498v-27.7565217h27.982426v84h-27.982426v-28h-25.549172v28h-28.225752zm118.742819 28h-24.697533v-28h77.499155v28h-24.819196v56h-27.982426zm65.089557-28h29.320716l18.006083 29.5826087 18.006084-29.5826087h29.320716v84h-27.982427v-41.6347826l-19.587698 30.1913043-19.587699-30.1913043v41.6347826h-27.495775zm108.52315 0h27.982426v56.2434782h39.662048v27.7565218h-67.644474z" fill="#000"/></G></Svg>
);
};
export default SVGDevHtml;
