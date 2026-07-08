import { motion } from "framer-motion";

const skills = [
  {
    title: "🤖 AI & Computer Vision",
    items: [
      "YOLO",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Object Detection",
      "Image Processing",
      "Object Tracking",
      "Scene Understanding",
      "OCR",
    ],
  },
  {
    title: "🤖 Robotics & Embedded AI",
    items: [
      "ROS2",
      "NVIDIA Jetson",
      "Raspberry Pi",
      "Arduino",
      "ESP32",
      "CUDA",
      "Autonomous Systems",
      "Sensor Fusion",
      "LiDAR",
      "IMU",
      "GPS",
      "Sonar",
    ],
  },
  {
    title: "💻 Programming",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "MATLAB",
      "OOP",
      "SDLC",
    ],
  },
  {
    title: "☁️ Cloud & Development",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "Jupyter",
      "Google Colab",
      "VS Code",
      "JetBrains IDEs",
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Linux",
      "Windows",
    ],
  },
  {
    title: "🗄 Database",
    items: [
      "SQL",
      "MySQL",
      "NoSQL",
      "Supabase",
    ],
  },
  {
    title: "🧠 AI Expertise",
    items: [
      "Computer Vision",
      "Deep Learning",
      "CNNs",
      "RNNs",
      "GANs",
      "Reinforcement Learning",
      "Motion Prediction",
      "Real-Time AI Deployment",
    ],
  },
  {
    title: "🤝 Soft Skills",
    items: [
      "Team Leadership",
      "Problem Solving",
      "Critical Thinking",
      "Public Speaking",
      "Time Management",
      "Self-Motivation",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 py-24 flex flex-col justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-20 text-white"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="bg-[#111827] border border-gray-700 rounded-3xl p-8 shadow-lg hover:border-cyan-400 transition-all duration-300"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {skill.items.map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-gray-200 text-sm hover:bg-cyan-400 hover:text-black transition duration-300 cursor-default"
                >
                  {item}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Skills;