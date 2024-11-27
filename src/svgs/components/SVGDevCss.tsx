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
const SVGDevCss = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 512 512" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none"><G transform="translate(76 104)"><Path d="m360 0-32.796926 367.157354-147.423401 40.842646-147.0174836-40.785123-32.7621894-367.214877z" fill="#264de4"/><Path d="m299.125309 343.778035 28.02715-313.7527737h-147.152459v346.7563617z" fill="#2965f1"/><Path d="m235.340718 211.256882-5.231271 58.410112-50.265264 13.557684v46.855832l92.392332-25.589013.677852-7.608965 10.590571-118.568739 1.099648-12.093812 8.13621-91.1568277h-112.896613v45.0378927h63.50571l-4.100857 46.118935h-59.404853v45.036901z" fill="#fff"/><Path d="m126.401054 233.776324 3.208632 35.919432 50.192814 13.543799.1975-.052564v46.857815l-.207425.057523-92.318889-25.610832-6.3140484-70.715173zm53.598946-67.556343v45.036901h-100.8540694l-4.0393236-45.036901zm0-91.1568277v45.0378927h-108.9128673l-4.0968864-45.0378927z" fill="#ebebeb"/></G><Path d="m289.235294 0v24h-38.673797v4.8000001h38.673797v55.1999999h-66.470588v-25.1999999h38.673797v-4.8000001h-38.673797v-54zm79.764706 0v24h-38.673797v4.8000001h38.673797v55.1999999h-66.470588v-25.1999999h38.673796v-4.8000001h-38.673796v-54zm-159.529412 0v27.6000001h-38.673796v27.6h38.673796v27.6000003h-66.470588v-82.8000004z" fill="#000"/></G></Svg>
);
};
export default SVGDevCss;
