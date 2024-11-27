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
const SVGMenuResume = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m23 2h-16c-1.105 0-2 .895-2 2v22c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-22c0-1.105-.895-2-2-2zm-12.25 10.222v-.903c-.188-.1-.724-.792-.78-1.332-.147-.012-.379-.159-.448-.738-.036-.311.11-.486.198-.541 0 0-.22-.501-.22-1 0-1.48.733-2.708 2.5-2.708.954 0 1.25.677 1.25.677.853 0 1.25.935 1.25 2.031 0 .547-.22 1-.22 1 .088.055.234.23.198.541-.068.579-.3.726-.447.738-.056.54-.592 1.232-.78 1.332v.903c.374 1.217 2.2.621 2.75 2.778h-8.001c.55-2.157 2.376-1.561 2.75-2.778zm10.25 11.778h-12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1zm0-5h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z"/></Svg>);
};
export default SVGMenuResume;
