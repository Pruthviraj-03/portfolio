import React, { useState, useEffect } from "react";

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
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
                  I have successfully completed all the examinations for my
                  B.Sc. in Information Technology, achieving a commendable
                  overall CGPA of 8.50. My consistent academic performance, with
                  SGPA scores of 8.50 in the 1st and 3rd semesters, 8.10 in the
                  2nd, 8.70 in the 4th, 9.60 in the 5th, and 8.30 in the 6th
                  semester, reflects my dedication and commitment to excellence
                  in my field.
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
                  With diligence and dedication, I earned a notable 70% in my
                  HSC degree, showcasing my commitment to academic growth and
                  achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col w-full items-center bg-body-color h-auto p-18 gap-24">
          <h1 className=" text-hover-color font-700 text-40 font-Libre">
            Education
          </h1>
          <div className="w-full flex flex-col gap-50">
            <div className="h-auto w-full">
              <h2 className="text-hover-color text-20 font-400">
                JES College, Jogeshwari (E) - BSC-IT
              </h2>
              <h3 className="text-hover-color text-18 font-400 my-10px mx-0">
                june 2021 - may 2024
              </h3>
              <p className="text-hover-color text-16 font-400">
                I have successfully completed all the examinations for my B.Sc.
                in Information Technology, achieving a commendable overall CGPA
                of 8.50. My consistent academic performance, with SGPA scores of
                8.50 in the 1st and 3rd semesters, 8.10 in the 2nd, 8.70 in the
                4th, 9.60 in the 5th, and 8.30 in the 6th semester, reflects my
                dedication and commitment to excellence in my field.
              </p>
            </div>
            <div className="h-auto w-full">
              <h2 className="text-hover-color text-20 font-400">
                L.S.Raheja College, Santacruz (W) - H.S.C
              </h2>
              <h3 className="text-hover-color text-18 font-400 my-10px mx-0">
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
      )}
    </>
  );
};

export default Education;
