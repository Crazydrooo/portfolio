import React from "react";

const Experience = ({ selectedTab }) => {
  return (
    <div className={`${selectedTab === 3 ? "show-content" : "content"}`}>
      <div className="block max-w-2xl p-10 text-center bg-gradient-to-r from-green-100 via-green-50 to-white border-2 border-gray-400 rounded-lg shadow-md">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-emerald-800">
          Cogent E-Services Pvt Limited (2023 - 2024)
        </h5>
        <ul className="font-normal text-gray-500">
          <li>
            * Provided exceptional support to customers through phone,
            addressing inquiries and resolving issues promptly.
          </li>
          <li>
            * Handled customer complaints effectively, identifying root causes
            and implementing solutions to enhance satisfaction.
          </li>
          <li>
            * Maintained accurate records of customer interactions in the CRM
            system, ensuring timely follow-ups and documentation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
