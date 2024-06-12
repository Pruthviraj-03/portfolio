import React from "react";

const Education = () => {
  return (
    <div className="education flex flex-col w-screen relative items-center justify-center">
      <div className="bg-body-color w-screen h-10"></div>
      <h1 className="absolute text-hover-color text-70 font-Libre tablet:text-55 tablet:ml-30">
        Education
      </h1>
      <div className="bg-bg-color w-screen p-10 flex flex-col gap-50">
        <div className="exp h-30vh w-50 relative ml-20vh tablet:w-full tablet:ml-0">
          <h2 className="text-hover-color text-32 font-400">
            JES College, Jogeshwari (E) - BSC-IT
          </h2>
          <div className="exp-desc">
            <h3 className="text-hover-color text-20 font-400 my-10px mx-0">
              june 2021 - may 2024
            </h3>
            <p className="text-hover-color text-16 font-400">
              In my pursuit of BSC-IT degree, I've consistently excelled, with
              SGPA scores reflecting my dedication: 8.50 in the 1st and 3rd
              semesters, 8.10 in the 2nd, 8.70 in the 4th, and an outstanding
              9.60 in the 5th semester, showcasing my commitment to academic
              excellence as I continue to pursue further knowledge in the 6th
              semester.
            </p>
          </div>
        </div>
        <div className="exp h-30vh w-50 relative ml-20vh tablet:w-full tablet:ml-0">
          <h2 className="text-hover-color text-32 font-400">
            L.S.Raheja College, Santacruz (W) - H.S.C
          </h2>
          <div className="exp-desc">
            <h3 className="text-hover-color text-20 font-400 my-10px mx-0">
              june 2019 - march 2020
            </h3>
            <p className="text-hover-color text-16 font-400">
              With diligence and dedication, I earned a notable 70% in my HSC
              degree, showcasing my commitment to academic growth and
              achievement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
