import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-10"
    >
      <div className="max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          className="bg-[#111827] rounded-3xl p-10 border border-cyan-500/20"
        >

          <p className="text-gray-300 leading-9 text-lg">

            I am an Artificial Intelligence Engineer specialized in
            <span className="text-cyan-400"> Computer Vision</span>,
            <span className="text-cyan-400"> Robotics</span>,
            <span className="text-cyan-400"> Embedded AI</span>, and
            <span className="text-cyan-400"> Autonomous Systems</span>.

            <br /><br />

            Throughout my academic journey, I have led multiple robotics teams,
            developed intelligent autonomous vehicles, underwater robots, and an
            autonomous wheelchair powered by AI.

            <br /><br />

            My passion lies in transforming cutting-edge AI research into
            real-world intelligent systems that improve people's lives.

          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;