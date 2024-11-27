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
const SVGActivitySki = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m24.5 3a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm-19.5410156.3867188a.50005.50005 0 0 0 -.2050782.9394531l12.5292968 7.1171871a.50074403.50074403 0 0 0 .080078.03711l.351563.199219.892578-.445313.392578 1.765625v.001953a1.0001 1.0001 0 0 0 .400391.798828l4 3a1.0003905 1.0003905 0 1 0 1.199218-1.601562l-.294921-.222657-2.820313-2.580078-.496094-4.1874996-.009765-.0039063a2.5 2.5 0 0 0 -2.478516-2.2050781 2.5 2.5 0 0 0 -1.144531.2773438l-.003907-.0019532-3.787109 1.90625-8.3183592-4.7246094a.50005.50005 0 0 0 -.2363282-.0703124.50005.50005 0 0 0 -.0507812 0zm5.6308596 6.5449218c-.357.4290004-.589844.9653594-.589844 1.5683594 0 .826.405437 1.552812 1.023438 2.007812v.007813l3.644531 2.876953-2.636719 3.28125-.140625.117188-8.3964844-4.769532a1.0001 1.0001 0 0 0 -.4765625-.136718 1.0001 1.0001 0 0 0 -.5117187 1.875l15.8730466 9.017578c2.009227 1.147482 4.782988 1.785264 7.03711.658203a1.0001 1.0001 0 1 0 -.894532-1.787109c-1.301106.650552-3.605735.274401-5.152343-.609376a1.0001 1.0001 0 0 0 -.001953-.001953l-5.619141-3.191406 4.892578-4.078125a1.0001 1.0001 0 0 0 .007813-1.527344l-1.605469-1.642578z"/></Svg>);
};
export default SVGActivitySki;
