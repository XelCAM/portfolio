import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

const skillsData = [
  { name: "HTML", url: "https://www.w3schools.com/html/default.asp" },
  { name: "CSS", url: "https://www.w3schools.com/css/default.asp" },
  { name: "JavaScript", url: "https://www.w3schools.com/js/default.asp" },
  { name: "ReactJS", url: "https://www.w3schools.com/react/default.asp" }
];

export default function Skills() {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 text-center" id="skills">
      <h1 className="text-5xl font-bold mb-4">My Skills</h1>
      <div className="flex justify-center gap-8">
        {skillsData.map((skill, index) => (
          <a key={index} href={skill.url} className="text-center">
            {skill.name === "HTML" && (
              <DiHtml5 className="text-6xl mb-2 hover:text-blue-400 transition duration-300 ease-in-out" />
            )}
            {skill.name === "CSS" && (
              <DiCss3 className="text-6xl mb-2 hover:text-blue-400 transition duration-300 ease-in-out" />
            )}
            {skill.name === "JavaScript" && (
              <DiJsBadge className="text-6xl mb-2 hover:text-blue-400 transition duration-300 ease-in-out" />
            )}
            {skill.name === "ReactJS" && (
              <DiReact className="text-6xl mb-2 hover:text-blue-400 transition duration-300 ease-in-out" />
            )}
            <p className="mt-2">{skill.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
