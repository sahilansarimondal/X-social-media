import React from "react";

interface Size {
  width?: string;
  height?: string;
}

const Logo: React.FC<Size> = ({ width, height }) => {
  return (
    <div>
      <img
        width={width}
        height={height}
        src="./images/twitter-x-logo-white.png"
        alt="Twitter.com"
      />
    </div>
  );
};

export default Logo;
