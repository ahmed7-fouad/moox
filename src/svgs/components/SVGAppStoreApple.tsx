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
const SVGAppStoreApple = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 24 24" width={width} height={height} fill={fill} stroke={stroke} style={style}><LinearGradient id="app-store-apple-l1" x1="50%" x2="50%" y1="0%" y2="100%"><Stop offset="0" stopColor="#72cbff"/><Stop offset="0.999043925" stopColor="#0b60a1"/></LinearGradient><G fill="none"><Rect fill="url(#app-store-apple-l1)" height="24" rx="6" width="24"/><Path d="m14.0207868 15.6c.0492832-.1408069.0748242-.2897947.0748242-.4425038 0-.744287-.6077209-1.3476509-1.3573826-1.3476509h-3.17711992l4.41795742-7.59726494c.2489536-.42810888.1012135-.97552958-.3299869-1.22269835-.4312003-.24716877-.9825741-.10048784-1.2315277.32762103l-.5017719.86286345-.5603251-.96355342c-.2317844-.39858413-.7451324-.53514913-1.1465948-.30502648-.40146236.23012265-.53901356.73979019-.30722912 1.13837432l1.04493302 1.7969013-3.46747436 5.96278309h-2.67754816c-.49790728 0-.90154088.4007398-.90154088.8950773 0 .4943376.4036336.8950774.90154088.8950774h9.21924792zm-.4950731-6.6c-.7204357.86782818-.8374967 2.1010889-.2533244 3.0971772.1154453.1968489.2673381.4797431.6400035 1.186213l3.2041307 5.4634519c.2541389.4333395.816997.5818125 1.2571787.3316238.4401817-.2501886.590999-.8042976.33686-1.237637l-1.1711776-1.9970075h1.6402967c.508278 0 .9203187-.405636.9203187-.9060133s-.4120407-.9060132-.9203187-.9060132h-2.7029893zm-5.4257137 7.8711801c-.2384498-.415804-.63124265-.6711801-1.06067315-.6711801-.2016853 0-.39710672.0532667-.57557607.1544998l-.65435818 1.3684146c-.22519441.4709336-.09155405 1.0731142.29849411 1.3450079s.88880078.1105399 1.11399523-.3603938z" fill="#fff"/></G></Svg>
);
};
export default SVGAppStoreApple;
