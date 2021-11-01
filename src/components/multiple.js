import React from "react";
import "../styles/experience-one.css";
import Experience from "./Experience";
import ExperienceCompany from "./experience-company";

const Multiple = () => {
  return (
    <div className="experience">
      <Experience experience="Experience" />

      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C4E0BAQECCNQj8sGlhA/company-logo_200_200/0/1597474324832?e=1643846400&v=beta&t=FdP82GKlpNwtDGdeYvf41ogfXb4kSVfZT0y8y8SZPYo"
        one="Web Devlopment (Node js)"
        two="Supero Software Private Limited"
        three="Jan 2021 - Feb 2021 2 mos"
        four="true"
      />
      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C4E0BAQEF0x_q7m5JjQ/company-logo_200_200/0/1599932632971?e=1643846400&v=beta&t=H9FmDGrzQRgK9PrIaTeouua5Vk3b02n2iVN46j4wRmc"
        one="Campus Ambassador"
        two="GeeksforGeeks"
        three="Jun 2020 - Feb 2021 9 mos"
        four="false"
      />
      <hr />
      <Experience experience="Education" />
      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C510BAQF0ldUOAHOqSQ/company-logo_200_200/0/1532854671740?e=1643846400&v=beta&t=MMOWRyvxLnmfrVtlTvETLQ1yGEL1hdZN8peVAHl3DN8"
        one="Maulana Abul Kalam Azad University of Technology,West Bengal"
        two="Bachelor's degree, Information Technology"
        three="Aug 2018 - Jun 2022 4 yrs"
        four="true"
      />
      <hr />
      <Experience experience="Licenses & certifications" />
      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/0/1519898420366?e=1643846400&v=beta&t=VsmR_2aNkjVQwFHjpJo84iRqX30F2MnDZrW9weWVqHI"
        one="Better spoken english"
        two="NPTEL"
        three="4 Week Course"
        four="true"
      />
      <hr />
      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/0/1519898420366?e=1643846400&v=beta&t=VsmR_2aNkjVQwFHjpJo84iRqX30F2MnDZrW9weWVqHI"
        one="Problem solving through programming in C"
        two="NPTEL"
        three="8 Week Course"
        four="false"
      />
      <hr />
      <ExperienceCompany
        link="https://media-exp1.licdn.com/dms/image/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/0/1519898420366?e=1643846400&v=beta&t=VsmR_2aNkjVQwFHjpJo84iRqX30F2MnDZrW9weWVqHI"
        one="Programming in Java"
        two="NPTEL"
        three="8 Week Course"
        four="false"
      />
    </div>
  );
};

export default Multiple;
