const SubscribeBackground = ({ children }: SubscribeBackgroundProps) => (
  <svg
    width="1068"
    height="364"
    viewBox="0 0 1068 364"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.7905 25.6249C34.8218 10.7142 47.9334 0 63.1491 0H1011.62C1027.38 0 1040.8 11.4774 1043.24 27.0493L1066.72 177.049C1067.24 180.33 1067.24 183.67 1066.72 186.951L1043.24 336.951C1040.8 352.523 1027.38 364 1011.62 364H63.1491C47.9334 364 34.8218 353.286 31.7905 338.375L1.29603 188.375C0.440757 184.168 0.440759 179.832 1.29603 175.625L31.7905 25.6249Z"
      fill="#FFF4EB"
    />
    <foreignObject x="31.79" y="25.62" width="1007.9" height="313.36">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </foreignObject>
  </svg>
);

export default SubscribeBackground;
