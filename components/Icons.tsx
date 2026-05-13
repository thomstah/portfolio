interface IconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function HouseIcon({ size = 16, color = 'currentColor', style, className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
      {/* chimney */}
      <rect x="6" y="1" width="3" height="2"/>
      {/* roof */}
      <rect x="6" y="3" width="4" height="1"/>
      <rect x="5" y="4" width="6" height="1"/>
      <rect x="4" y="5" width="8" height="1"/>
      <rect x="3" y="6" width="10" height="1"/>
      <rect x="2" y="7" width="12" height="1"/>
      {/* walls */}
      <rect x="3" y="8" width="2" height="7"/>
      <rect x="11" y="8" width="2" height="7"/>
      {/* floor */}
      <rect x="3" y="14" width="10" height="1"/>
      {/* door */}
      <rect x="7" y="11" width="2" height="4"/>
    </svg>
  );
}

export function GalleryIcon({ size = 16, color = 'currentColor', style, className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
      {/* frame */}
      <rect x="1" y="1" width="14" height="2"/>
      <rect x="1" y="13" width="14" height="2"/>
      <rect x="1" y="1" width="2" height="14"/>
      <rect x="13" y="1" width="2" height="14"/>
      {/* sun */}
      <rect x="10" y="4" width="2" height="2"/>
      {/* mountain */}
      <rect x="7" y="6" width="2" height="1"/>
      <rect x="6" y="7" width="4" height="1"/>
      <rect x="5" y="8" width="6" height="1"/>
      {/* ground fill */}
      <rect x="3" y="9" width="10" height="4"/>
    </svg>
  );
}

export function ScrollIcon({ size = 16, color = 'currentColor', style, className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
      {/* top roll */}
      <rect x="0" y="0" width="16" height="2"/>
      <rect x="1" y="2" width="14" height="1"/>
      {/* body edges */}
      <rect x="2" y="3" width="1" height="10"/>
      <rect x="13" y="3" width="1" height="10"/>
      {/* text lines */}
      <rect x="4" y="5" width="8" height="1"/>
      <rect x="4" y="7" width="7" height="1"/>
      <rect x="4" y="9" width="5" height="1"/>
      <rect x="4" y="11" width="6" height="1"/>
      {/* bottom roll */}
      <rect x="1" y="13" width="14" height="1"/>
      <rect x="0" y="14" width="16" height="2"/>
    </svg>
  );
}

export function BriefcaseIcon({ size = 16, color = 'currentColor', style, className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
      {/* handle */}
      <rect x="5" y="2" width="6" height="1"/>
      <rect x="5" y="2" width="1" height="3"/>
      <rect x="10" y="2" width="1" height="3"/>
      {/* center clasp */}
      <rect x="7" y="3" width="2" height="3"/>
      {/* body border */}
      <rect x="0" y="5" width="16" height="2"/>
      <rect x="0" y="13" width="16" height="2"/>
      <rect x="0" y="5" width="2" height="10"/>
      <rect x="14" y="5" width="2" height="10"/>
      {/* divider */}
      <rect x="2" y="10" width="12" height="1"/>
    </svg>
  );
}
