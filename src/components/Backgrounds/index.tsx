import Svg, { Path } from "react-native-svg";

export type BackgroundProps = {
  color: string | undefined;
  zIndex?: number;
};

const Background = ({ color, zIndex }: BackgroundProps) => {
  return (
    <Svg
      style={{
        position: "absolute",
        top: 0,
        zIndex: zIndex,
      }}
      height="50%"
      width="100%"
      viewBox="180 0 740 280"
      preserveAspectRatio="none"
    >
      <Path
        fill={color}
        fill-opacity="1"
        d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,266.7C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </Svg>
  );
};

export default Background;
