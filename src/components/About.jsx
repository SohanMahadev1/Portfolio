import React from "react";
import expLottie from "../data/experience.json";
import AnimationLottie from "./animations/AnimationLottie";
 // Import the Lottie animation component

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row justify-center items-center w-full h-full">
        {/* Left Section: Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full h-full">
            <AnimationLottie animationData={expLottie} />
          </div>
        </div>

        {/* Right Section: About Content */}
        <div className="lg:w-1/2">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-5">
           I am a passionate web developer skilled in both backend and frontend technologies. Continuously striving to expand my knowledge, 
           I’m eager to explore and work with the latest web technologies. Currently, 
           I enjoy taking on freelance projects to deliver creative solutions
          </p>

          <br />

          <p className="text-xl">
            I like to code matters from scratch and love the idea of bringing thoughts to life.
            Connect with me to get your project done.
            <br /> <br />
            I value minimalistic designs, thoughtful branding of the content, and customer relatable experience.
            Let’s discover together how we can make your project convert better!
            <br /> <br />
            I enjoy creating or redesigning a distinct identity for a product or service, getting more traffic from
            search engines and social platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
