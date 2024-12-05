import React from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationData, className }) => {
  return <Lottie animationData={animationData} className={className} />;
};

export default AnimationLottie;
