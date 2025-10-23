export default function PortfolioPreview() {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] font-[Poppins] min-h-screen">
      <header className="bg-[#161b22] flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-[#58a6ff] text-2xl font-semibold">Bihar Gourav</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#about" className="hover:text-[#58a6ff]">About</a></li>
          <li><a href="#skills" className="hover:text-[#58a6ff]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#58a6ff]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#58a6ff]">Contact</a></li>
        </ul>
      </header>

      <section className="text-center py-20">
        <h2 className="text-4xl">👋 Hi, I'm <span className="text-[#58a6ff]">Bihar Gourav</span></h2>
        <p className="mt-4 text-lg">B.Tech Electrical Engineering | AI/ML Explorer | VLSI & EV Enthusiast</p>
        <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-[#58a6ff] text-[#0d1117] rounded-full font-medium hover:scale-105 transition-transform">Contact Me</a>
      </section>

      <section id="about" className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-3xl mb-6 text-[#58a6ff]">About Me</h2>
        <p>I’m an Electrical Engineering student passionate about innovation, AI/ML, VLSI design, and EV technologies — blending hardware and intelligence to create impactful, future-ready systems.</p>
        <ul className="mt-6 space-y-2">
          <li>🥇 Gold Medalist — AI/ML Olympiad</li>
          <li>🛰️ Top 18 Nationwide — ATL Space Challenge (ISRO)</li>
          <li>🏆 1st Rank — All-India Tech Competition</li>
        </ul>
      </section>

      <section id="skills" className="bg-[#161b22] py-16">
        <h2 className="text-3xl text-center mb-10 text-[#58a6ff]">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#0d1117] p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform"><h3 className="text-xl mb-2">Programming</h3><p>Python, C, C++</p></div>
          <div className="bg-[#0d1117] p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform"><h3 className="text-xl mb-2">Electrical & VLSI</h3><p>Circuit Design, Power Systems, MATLAB</p></div>
          <div className="bg-[#0d1117] p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform"><h3 className="text-xl mb-2">AI/ML</h3><p>Data Analysis, Model Training</p></div>
          <div className="bg-[#0d1117] p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform"><h3 className="text-xl mb-2">Web Dev</h3><p>HTML, CSS, MySQL</p></div>
        </div>
      </section>

      <section id="projects" className="py-16 text-center">
        <h2 className="text-3xl mb-10 text-[#58a6ff]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#161b22] p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h3 className="text-xl mb-2">⚡ Smart EV Battery Management System</h3>
            <p>Controller-based system to enhance battery efficiency and safety in EVs.</p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h3 className="text-xl mb-2">🧠 AI Fault Detection in Circuits</h3>
            <p>ML model to predict and identify faults in electrical circuits.</p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h3 className="text-xl mb-2">🛰️ Mini Satellite Simulation</h3>
            <p>Simulated satellite telemetry & control — recognized by ISRO.</p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-xl hover:-translate-y-1 transition-transform">
            <h3 className="text-xl mb-2">🔲 VLSI Design Practice</h3>
            <p>RISC-V CPU, Digital Clock, 4-bit ALU projects using Verilog HDL.</p>
            <a href="https://github.com/BGourav05" target="_blank" className="text-[#58a6ff]">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#161b22] py-16 text-center">
        <h2 className="text-3xl mb-6 text-[#58a6ff]">Contact</h2>
        <p>📧 bihargaurav56@gmail.com</p>
        <p className="mt-2">🔗 <a href="https://www.linkedin.com/in/bihar-gourav-271965202" className="text-[#58a6ff]">LinkedIn</a> | <a href="https://github.com/BGourav05" className="text-[#58a6ff]">GitHub</a></p>
      </section>

      <footer className="text-center py-6 bg-[#0d1117] text-[#8b949e]">
        ⭐ “Innovation is intelligence having fun.” – Albert Einstein
      </footer>
    </div>
  );
}
