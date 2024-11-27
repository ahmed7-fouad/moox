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
const SVGAppStore = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 30 30" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m18.367978 21c.0821387-.2346782.124707-.4829911.124707-.7375063 0-1.2404783-1.0128682-2.2460848-2.2623044-2.2460848h-5.2951998l7.3632624-12.6621083c.4149227-.7135148.1686891-1.62588263-.5499782-2.03783058-.7186672-.41194796-1.6376235-.16747974-2.0525462.54603505l-.8362865 1.43810575-.9338751-1.60592237c-.3863074-.66430688-1.2418873-.89191522-1.9109913-.50837747-.669104.38353776-.898356 1.23298366-.5120486 1.89729054l1.7415551 2.99483549-5.779124 9.93797189h-4.46258027c-.82984546 0-1.50256813.6678996-1.50256813 1.4917955 0 .823896.67272267 1.4917956 1.50256813 1.4917956h15.36541327zm-.8251218-11c-1.2007262 1.4463803-1.3958278 3.5018149-.4222074 5.161962.1924088.3280815.4455636.7995718 1.0666726 1.9770216l5.3402177 9.1057532c.4235649.7222325 1.3616618.9696876 2.0952979.5527064.7336361-.416981.9849984-1.340496.5614334-2.0627284l-1.9519628-3.3283458h2.7338279c.84713 0 1.5338645-.67606 1.5338645-1.5100222 0-.8339621-.6867345-1.510022-1.5338645-1.510022h-4.5049822zm-9.0428562 13.1186335c-.39741634-.6930067-1.05207109-1.1186335-1.76778858-1.1186335-.33614217 0-.66184454.0887779-.95929345.2574996l-1.09059697 2.280691c-.37532402.7848894-.15259008 1.7885237.49749019 2.2416799.65008026.4531562 1.48133463.1842332 1.85665871-.6006563z" fillRule="evenodd"/></Svg>);
};
export default SVGAppStore;
