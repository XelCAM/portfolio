import project1 from "../assets/project1.jpg";


const projectsData = [
  {
    image: project1,
    title: "Sonic Rendezvous",
    description:
      "Elevate your live music experience with this app dedicated to the ultimate band gig rendezvous! Discover upcoming shows, setlists, and exclusive behind-the-scenes content. Purchase tickets seamlessly, connect with fellow fans, and immerse yourself in the sonic magic of live performances. Let the rhythm guide you to unforgettable musical rendezvous!",
  },
  {
    image: "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    title: "Project 2",
    description:
      "Description of Project 2 goes here.",
  },
  {
    image: "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    title: "Project 3",
    description:
      "Description of Project 3 goes here.",
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-800 text-white py-8 px-4" id="projects">
      <h1 className="text-5xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <img src={project.image} alt={project.title} className="w-full mb-4 rounded-lg" />
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
            </div>
            <a className="bg-gray-900 hover:bg-gray-800 text-white font-bold mt-3 py-3 px-4 rounded flex justify-center items-center" href="https://github.com/XelCAM" >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
