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
const SVGChevronRight = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m17.444415 15.0014129-8.87603874-9.66445478c-.75783501-.76537675-.75783501-1.99831822 0-2.76369497.36117654-.36675006.85439417-.57326315 1.36913109-.57326315.51473695 0 1.00795455.20651309 1.36913115.57326315l10.823059 11.04347645c.7566376.7669695.7566376 1.9995513 0 2.7665208l-10.823059 11.0434765c-.3611766.36675-.8543942.5732631-1.36913115.5732631-.51473692 0-1.00795455-.2065131-1.36913109-.5732631-.75783501-.7653768-.75783501-1.9983183 0-2.763695z"/></Svg>);
};
export default SVGChevronRight;
