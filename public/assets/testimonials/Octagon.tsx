interface OctagonProps {
  src: string;
  width?: string;
  height?: string;
  id: string;
  animateStroke?: boolean;
}

const Octagon = ({
  src,
  width,
  height,
  id,
  animateStroke = false,
}: OctagonProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 214 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M121.085 5.02479L170.355 30.6775C175.905 33.5674 180.433 38.0946 183.322 43.645L208.975 92.9147C213.571 101.742 213.571 112.258 208.975 121.085L183.322 170.355C180.433 175.905 175.905 180.433 170.355 183.322L121.085 208.975C112.258 213.571 101.742 213.571 92.9147 208.975L43.645 183.322C38.0946 180.433 33.5674 175.905 30.6775 170.355L5.02479 121.085C0.428531 112.258 0.428525 101.742 5.02479 92.9147L30.6775 43.645C33.5674 38.0946 38.0946 33.5674 43.645 30.6775L92.9147 5.02479C101.742 0.428531 112.258 0.428526 121.085 5.02479Z"
        fill={`url(#${id})`}
        stroke="#EDDCCE"
        strokeWidth="3"
        className={animateStroke ? "animate-stroke-pulse" : ""}
      />
      <defs>
        <pattern
          id={id}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#image-${id}`} transform="scale(0.0015625)" />
        </pattern>
        <image
          id={`image-${id}`}
          width="640"
          xlinkHref={src}
          className="object-center object-cover"
        />
      </defs>
      <style>
        {animateStroke &&
          `
          @keyframes pulse-stroke {
            0% {
              stroke: #EDDCCE;
            }
            50% {
              stroke: #1e1c17;
            }
            100% {
              stroke: #EDDCCE;
            }
          }

          .animate-stroke-pulse {
            animation: pulse-stroke 4s infinite;
          }
        `}
      </style>
    </svg>
  );
};

export default Octagon;
