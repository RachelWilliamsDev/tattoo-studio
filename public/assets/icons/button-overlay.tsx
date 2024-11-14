import React from "react";

interface ButtonOverlayProps {
  className?: string;
}

const ButtonOverlay: React.FC<ButtonOverlayProps> = ({ className }) => (
  <svg
    className={className}
    width="123"
    height="80"
    viewBox="0 0 123 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M76.5 0C73.7 57.6 24.3333 77.3333 0 80L123 80L123 0L76.5 0Z"
      fill="url(#paint0_linear_5_36693)"
      fillOpacity="0.2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5_36693"
        x1="35"
        y1="24"
        x2="76.5"
        y2="60"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#342416" />
        <stop offset="1" stopColor="#342416" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default ButtonOverlay;
