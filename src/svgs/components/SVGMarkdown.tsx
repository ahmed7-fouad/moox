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
const SVGMarkdown = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m26.0718281 17.2694375h-24.05987498c-1.08981249 0-2.01195312-.9220313-2.01195312-2.0119531v-13.24553128c0-1.08981249.92214063-2.01195312 2.01195312-2.01195312h23.97609378c1.0898125 0 2.0119531.92214063 2.0119531 2.01195312v13.24553128c0 1.0898125-.8383594 2.0119531-1.9281719 2.0119531zm-24.05987498-15.92817187c-.33534374 0-.67068749.33534375-.67068749.6706875v13.24553127c0 .419125.33534375.6706875.67068749.6706875h23.97609378c.419125 0 .6706875-.3353438.6706875-.6706875v-13.24553127c0-.419125-.3353438-.6706875-.6706875-.6706875zm2.01195313 11.90426557v-9.22162495h2.68264062l2.68264063 3.3534375 2.6826406-3.3534375h2.6826406v9.22162495h-2.6826406v-5.28149995l-2.6826406 3.35343745-2.68264063-3.35343745v5.28149995zm16.85031245 0-4.0239062-4.44314057h2.6826406v-4.77848438h2.6826406v4.69470312h2.6826407l-4.0239063 4.52692183z" transform="translate(1 6)"/></Svg>);
};
export default SVGMarkdown;
