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
const SVGMenuTalk = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m21 3c-2.878 0-5.269562 2.030375-5.851562 4.734375l7.117187 7.117187c2.704-.582 4.734375-2.973562 4.734375-5.851562 0-3.314-2.686-6-6-6zm-6.783203 6.6308594-10.998047 13.7441406c-.318.398-.2867812.971031.0742188 1.332031l2 2c.194.194.4500312.292969.7070312.292969.22 0 .4400469-.07175.6230469-.21875l13.7460941-10.998047zm.783203 4.3691406c.25575 0 .511531.097469.707031.292969.391.391.391 1.023062 0 1.414062l-2 2c-.195.195-.451031.292969-.707031.292969s-.512031-.097969-.707031-.292969c-.391-.391-.391-1.023062 0-1.414062l2-2c.1955-.1955.451281-.292969.707031-.292969z"/></Svg>);
};
export default SVGMenuTalk;
