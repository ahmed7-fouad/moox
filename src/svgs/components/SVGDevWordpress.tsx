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
const SVGDevWordpress = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 50 50" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m25 2c-12.683 0-23 10.318-23 23s10.317 23 23 23 23-10.318 23-23-10.317-23-23-23zm0 5c4.26 0 8.166 1.485 11.247 3.955-.956.636-1.547 1.74-1.547 2.945 0 1.6.9 3 1.9 4.6.8 1.3 1.6 3 1.6 5.4 0 1.7-.5 3.8-1.5 6.4l-2 6.6-7.1-21.2c1.2-.1 2.3-.2 2.3-.2 1-.1.9-1.6-.1-1.6 0 0 0 0-.1 0 0 0-3.2.3-5.3.3-1.9 0-5.2-.3-5.2-.3s0 0-.1 0c-1 0-1.1 1.6-.1 1.6 0 0 1 .1 2.1.2l3.1 8.4-4.3 12.9-7.2-21.4c1.2-.1 2.3-.2 2.3-.2 1-.1.9-1.6-.1-1.6 0 0 0 0-.1 0 0 0-2.152.202-4.085.274 3.288-4.294 8.453-7.074 14.285-7.074zm-18 18c0-1.8.271-3.535.762-5.174l7.424 20.256c-4.925-3.211-8.186-8.759-8.186-15.082zm12.678 17.2 5.322-15.6 5.685 15.471c-1.788.594-3.696.929-5.685.929-1.853 0-3.64-.281-5.322-.8zm15.626-2.45 5.296-15.35c.786-2 1.21-3.742 1.39-5.304.643 1.851 1.01 3.832 1.01 5.904 0 6.111-3.046 11.497-7.696 14.75z" fill="#0073aa"/></Svg>);
};
export default SVGDevWordpress;
