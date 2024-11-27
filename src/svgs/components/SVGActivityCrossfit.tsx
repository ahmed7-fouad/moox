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
const SVGActivityCrossfit = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m4 3v3h-.5a.50005.50005 0 1 0 0 1h.5v3h3v-3h1.1796875l.8398437 4.195312a1.0001 1.0001 0 0 0 .1328126.333985l.2460937.392578 1.9746095 3.527344 1.017578 3.550781-3.0722656 3.679688-4.6503906 2.376953-.0390626.015625a1.0001 1.0001 0 1 0 .7421876 1.855468l5.0000002-2a1.0001 1.0001 0 0 0 .183594-.095703l.033203-.023437 5.414062-2.808594 3.263672.035156.734375 3.892578v.072266a1.0001 1.0001 0 1 0 2 0v-5.4375a1.0001 1.0001 0 0 0 -.787109-.976562l-3.179688-.986329.636719-2.902343 2.019531-3.916016.158203-.251953a1.0001 1.0001 0 0 0 .132813-.333985l.839843-4.195312h1.179688v3h3v-3h.5a.50005.50005 0 1 0 0-1h-.5v-3h-3v3h-.998047a1.0001 1.0001 0 0 0 -1.017578-1.0136719 1.0001 1.0001 0 0 0 -.964844.8183594l-.039062.1953125h-9.960938l-.0390622-.1953125a1.0001 1.0001 0 0 0 -.9960938-.8183594 1.0001 1.0001 0 0 0 -.9863281 1.0136719h-.9980469v-3zm6.234375 4h9.53125l-.980469 3.644531-2.291015 3.353516-1.492188-.003906a1.0001 1.0001 0 0 0 -.001953 0 1.0001 1.0001 0 0 0 -.001953 0l-1.40625.001953-2.359375-3.392578zm4.765625 1a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2z"/></Svg>);
};
export default SVGActivityCrossfit;
