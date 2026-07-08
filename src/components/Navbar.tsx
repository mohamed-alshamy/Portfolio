function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Mohamed Alshamy
        </h1>

        <ul className="flex gap-8 text-white">
          <li className="cursor-pointer hover:text-cyan-400 duration-300">Home</li>
          <li className="cursor-pointer hover:text-cyan-400 duration-300">About</li>
          <li className="cursor-pointer hover:text-cyan-400 duration-300">Projects</li>
          <li className="cursor-pointer hover:text-cyan-400 duration-300">Experience</li>
          <li className="cursor-pointer hover:text-cyan-400 duration-300">Contact</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;