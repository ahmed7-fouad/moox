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
const SVGTraining = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m7 3a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 -3-3zm9.984375.9863281a1.0001 1.0001 0 0 0 -.984375 1.0136719h-4v2h4.832031a1.0001 1.0001 0 0 0 .326172 0h6.841797v10h-4.841797a1.0001 1.0001 0 0 0 -.121094-.013672 1.0001 1.0001 0 0 0 -.099609 0 1.0001 1.0001 0 0 0 -.109375.013672h-3.662109a1.0001 1.0001 0 0 0 -.132813-.013672 1.0001 1.0001 0 0 0 -.199219.013672h-2.833984v2h1.71875l-1.689453 6.757812a1.0004596 1.0004596 0 1 0 1.941406.484376l1.810547-7.242188h2.4375l1.810547 7.242188a1.0004596 1.0004596 0 1 0 1.941406-.484376l-1.689453-6.757812h4.71875a1.0001 1.0001 0 0 0 1-1v-12a1.0001 1.0001 0 0 0 -1-1h-7a1.0001 1.0001 0 0 0 -1.015625-1.0136719zm-10.984375 7.0136719c-1.105 0-2 .895-2 2v12.966797c0 .57.4632031 1.033203 1.0332031 1.033203.544 0 .99525-.422844 1.03125-.964844l.4375-6.568359c.018-.262.2350469-.466797.4980469-.466797s.4800469.203844.4980469.464844l.4375 6.570312c.036.543.48725.964844 1.03125.964844.57 0 1.0332031-.463203 1.0332031-1.033203v-11.966797c0-.552.448-1 1-1h5a1.0001 1.0001 0 1 0 0-2h-4z"/></Svg>);
};
export default SVGTraining;
