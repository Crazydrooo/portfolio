import React from "react";

const Summary = ({ selectedTab }) => {
  return (
    <div className={`${selectedTab === 1 ? "show-content" : "content"}`}>
      <div className="block max-w-2xl text-center p-10 mb-2 bg-gradient-to-r from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight  text-emerald-800">
          About me
        </h5>
        <p className="font-normal text-gray-500">
          A proficient Front-End Developer with extensive experience in creating
          responsive and visually appealing web applications. Skilled in HTML,
          CSS, JavaScript, and modern technologies such as React and NextJs.
        </p>
      </div>

      <div className="block max-w-2xl p-10 text-center mb-2 bg-gradient-to-r from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight  text-emerald-800">
          Contact details
        </h5>
        <ul className="font-normal text-gray-500">
          <li>Phone : +91 9886592131</li>
          <li>Email : shahilsha699@gmail.com</li>
          <li>Address : Mangalore, Karnataka, India</li>
        </ul>
      </div>

      <div className="block max-w-2xl p-10 text-center bg-gradient-to-r from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-emerald-800">
          Skills
        </h5>

        <ul className="font-normal text-gray-500">
          <li>HTML5</li>
          <li>CSS3 - Bootstrap, Tailwind</li>
          <li>JavaScript - React JS, Redux, Next JS</li>
          <li>Version control - Git, GitHub</li>
          <li>Python</li>
          <li>Firebase</li>
          <li>SQL - MySQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
