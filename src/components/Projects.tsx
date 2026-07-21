import wheelchair from "../assets/projects/Autonomous Wheelchair.jpeg";
import vehicle from "../assets/projects/Autonomous Vehicle.jpg";
import rov from "../assets/projects/ROV IMAGE.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Autonomous Wheelchair",
    description:
      "AI-powered autonomous wheelchair featuring object detection, face recognition, drowsiness detection, obstacle avoidance, ESP32 motor control, and a real-time monitoring dashboard built with React and FastAPI.",
    image: wheelchair,
    tech: ["ROS2", "YOLO", "OpenCV", "ESP32", "Jetson Orin Nano", "FastAPI", "FaceNet", "Dlib", "Docker",], 
    github: "https://github.com/mohamed-alshamy/Autonomous-Wheelchair",
  },
  {
    title: "Autonomous Vehicle",
    description:
      "AI-powered autonomous vehicle developed using ROS 2, integrating the Nav2 navigation stack, ZED2 stereo camera, Ublox GPS, and Map Server to achieve real-time perception, localization, path planning, and autonomous navigation.",
    image: vehicle,
    tech: ["ROS2", "Jetson", "Nav2 stack", "Map Server", "Ublox GPS", "ZED2 stereo camera", "CUDA"],
    github: "https://github.com/mohamed-alshamy/Autonomous-Vehicle",
  },
  {
    title: "Remotely Operated Vehicle (ROV)",
    description:
      "AI-powered underwater robot using sonar, cameras, and computer vision.",
    image: rov,
    tech: ["TensorFlow", "Raspberry Pi", "OpenCV"],
    github: "https://github.com/mohamed-alshamy/HYDROTRON-ROV-",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-10"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl font-semibold text-black"
              >
                View Project
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
