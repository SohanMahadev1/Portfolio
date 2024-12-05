import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "MAS in Information Technology and Management",
      company: "Illinois Institute od Technology.",
      duration: "Aug 2023 - Present1",
      description:
        "Major in Software Development, Skilled in Developing Websites and Mobile Apps.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Entrix",
      duration: "June 2022 - July 2023",
      description:
        "Designed user-friendly web and mobile interfaces. Conducted user research and usability testing.",
    },
    {
      id: 3,
      title: "Software Engineer-1",
      company: "Cognizant Technological Solutions",
      duration: "Sept 2021 - May 2022",
      description:
        "Assisted in developing features for enterprise software applications. Gained experience in Aws Elastic BeanStalk.",
    },

    {
        id: 4,
        title: "AIML Intern",
        company: "Quant Masters Solutions",
        duration: "Feb 2021 - August 2021",
        description:
          "Successfully developed and implemented a machine learning model for classifying music genres with an accuracy of 85% with 85% Accuracy.",
      },
  

    
  ];

  return (
    <div
      name="timeline"
      className="timeline w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Timeline
          </p>
          <p className="py-6">
            Here's an overview of my career history and milestones.
          </p>
        </div>

        <div className="relative border-l border-gray-700">
          {timelineData.map(({ id, title, company, duration, description }) => (
            <div key={id} className="mb-10 ml-10 group">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 top-2 group-hover:bg-blue-500 transition duration-300"></div>

              {/* Timeline Content */}
              <div className="p-6 bg-gray-900 rounded-lg shadow-lg group-hover:shadow-xl border border-gray-700 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{company}</p>
                <p className="text-sm text-gray-500 italic">{duration}</p>
                <p className="mt-4 text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
