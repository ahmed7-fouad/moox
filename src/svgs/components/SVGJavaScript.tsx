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
const SVGJavaScript = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fill="none" fillRule="evenodd"><Path d="m0 0h30v30h-30z" fill="#f7df1e"/><Path d="m20.2258772 23.4280335c.6070413.985975 1.396817 1.7107046 2.7936339 1.7107046 1.173422 0 1.9230152-.5834002 1.9230152-1.3895013 0-.965989-.7701628-1.30813-2.0617402-1.8701167l-.7079757-.3021688c-2.0435623-.8660592-3.4011536-1.9510123-3.4011536-4.2446413 0-2.1128035 1.6182985-3.7211989 4.1473983-3.7211989 1.8005545 0 3.095002.6233722 4.027808 2.2555604l-2.2052488 1.4085357c-.4855375-.866059-1.0093437-1.2072483-1.8225592-1.2072483-.8294797 0-1.3551994.5234424-1.3551994 1.2072483 0 .8451214.526198 1.1872624 1.7412375 1.7107046l.7079758.3016931c2.4061607 1.0264227 3.7647088 2.0728315 3.7647088 4.4254668 0 2.5363158-2.0029017 3.9258172-4.692731 3.9258172-2.6300343 0-4.329176-1.2467445-5.1605692-2.8808361zm-10.0039841.2441144c.4448766.7851635.8495708 1.4489835 1.8225591 1.4489835.9304141 0 1.5173642-.3621268 1.5173642-1.7701867v-9.578994h2.8319029v9.6170626c0 2.9170011-1.7192329 4.2446411-4.2287199 4.2446411-2.26743576 0-3.58053941-1.1672762-4.24833273-2.5731947z" fill="#000" fillRule="nonzero"/></G></Svg>);
};
export default SVGJavaScript;
