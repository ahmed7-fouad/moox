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
const SVGDevices = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><G fillRule="evenodd" transform="translate(3 1)"><Path d="m11.1584003 27h-9.1584003c-1.1045695 0-2-.8954305-2-2v-23c0-1.1045695.8954305-2 2-2h18c1.1045695 0 2 .8954305 2 2v3h-1.5v-2.5c0-.55228475-.4477153-1-1-1h-17c-.55228475 0-1 .44771525-1 1v22c0 .5522847.44771525 1 1 1h8.5v.8174497c.00028.2430067.0568382.4739597.1584003.6825503zm-.1584003-3v.5h-4.75c-.13807119 0-.25-.1119288-.25-.25s.11192881-.25.25-.25z"/><Path d="m14 6h8c1.1045695 0 2 .8954305 2 2v18c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-18c0-1.1045695.8954305-2 2-2zm.5 1.5c-.5522847 0-1 .44771525-1 1v17c0 .5522847.4477153 1 1 1h7c.5522847 0 1-.4477153 1-1v-17c0-.55228475-.4477153-1-1-1zm.7503535 0h5.7972728c-.1684236-.0000341-.3138441.11792054-.3485606.28272729l-.0737879.35075757c-.0523867.2489564-.272031.42716259-.5264394.42712122h-3.899697c-.2544084.00004137-.4740527-.17816482-.5264394-.42712122l-.0738636-.35068181c-.0346796-.16480905-.1800667-.28279378-.3484849-.28280305zm.9996465 17.5h3.5c.1380712 0 .25.1119288.25.25s-.1119288.25-.25.25h-3.5c-.1380712 0-.25-.1119288-.25-.25s.1119288-.25.25-.25z" fillRule="nonzero"/></G></Svg>);
};
export default SVGDevices;
