import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
      </div>
      <p className="text-2xl mt-20 p-4 max-w-screen-lg mx-auto lg:w-3/4 xl:w-1/2">
        I am an information systems student with a passion for technology and a diverse skill set. Proficient in programming languages like Java and C++, I can develop robust software solutions. I excel in database management, utilizing MongoDB to design efficient databases. With strong analytical abilities, I translate complex business requirements into innovative technical solutions. Skilled in data analysis, I collect and interpret data for informed decision-making. I prioritize information security and possess network administration expertise. Additionally, I create user-centered web applications using HTML, CSS, and JavaScript, specializing in Node.js and React as a MERN stack developer. Effective project management ensures timely and budget-conscious completion. I excel in UX design, optimizing interfaces for enhanced usability. Business process analysis enables me to improve efficiency. With my adaptable nature and constant drive to learn, I am a valuable asset in information systems.
      </p>
    </div>
  );
};

export default About;