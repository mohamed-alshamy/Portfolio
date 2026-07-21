import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/profile.png";
import cv from "../assets/cv/Mohamed Elsayed Alshamy.pdf";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-10 overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full flex items-center justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="text-cyan-400 text-xl mb-4 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-7xl font-bold mb-5 text-white">
            Mohamed Alshamy
          </h1>

          <h2 className="text-3xl text-gray-300 mb-8">
            Computer Vision & Robotics Engineer
          </h2>

          <p className="max-w-xl text-gray-400 leading-8 mb-10">
            Passionate about Autonomous Systems, Computer Vision,
            Embedded AI, ROS2, Sensor Fusion, and Intelligent Robotics.
          </p>

          <div className="flex items-center gap-6">

            {/* View CV */}
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-6 py-3 rounded-xl font-semibold text-black shadow-lg shadow-cyan-500/30"
            >
              View CV
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Mohamed-Alshamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <FaGithub size={34} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mohamed-alshamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin size={34} />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">

          {/* Image Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-3xl"></div>

          {/* Profile Image */}
          <img
            src={profile}
            alt="Mohamed Alshamy"
            className="relative z-10 w-[470px] animate-float drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] select-none"
            draggable="false"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
