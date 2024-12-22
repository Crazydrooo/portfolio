import React from "react";

const Education = ({ selectedTab }) => {
  return (
    <div className={`${selectedTab === 2 ? "show-content" : "content"}`}>
      <div className="block max-w-2xl p-10 mb-4 text-center bg-gradient-to-l from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-emerald-800">
          Yenepoya Institution (2023)
        </h5>
        <p className="font-normal text-gray-500">
          Bachelor of Computer Application (Big Data Analytics, Cloud Computing,
          and Cybersecurity)
        </p>
      </div>

      <div className="block max-w-2xl p-10 mb-4 text-center bg-gradient-to-l from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-emerald-800">
          Govinda Dasa P.U. College (2020)
        </h5>
        <p className="font-normal text-gray-500">Commerce Computer Science</p>
      </div>

      <div className="block max-w-2xl p-10 text-center mb-4 bg-gradient-to-l from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-emerald-800">
          Al - Badriya English Medium School (2018)
        </h5>
        <p className="font-normal text-gray-500">
          Primary and Secondary School
        </p>
      </div>
    </div>
  );
};

export default Education;
