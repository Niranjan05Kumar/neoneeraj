const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          02 / ABOUT
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      {/* Main About Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight mb-6">
            "I enjoy building full stack applications and solving problems through code"
          </h2>
          <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I'm an undergraduate student at <span className="text-text">Indian Institute of Technology (BHU) Varanasi, </span>
              pursuing <span className="text-text">Mining Engineering. </span> I started my journey in
              frontend development and gradually expanded into full-stack development,
              building applications across the modern web stack.
            </p>
            <p>
              My current focus is building practical web applications with
              <span className="text-text"> React, TypeScript, Node.js, Express, and MongoDB. </span>
              Alongside development, I practice <span className="text-text">Data Structures & Algorithms</span> in <span className="text-text"> C++ </span>
              to strengthen my problem-solving skills.
            </p>
          </div>
        </div>

        {/* Current Focus Box */}
        <div className="lg:col-span-5 border border-border bg-surface p-6 sm:p-8">
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-6">
            CURRENT FOCUS
          </span>

          <div className="space-y-6 font-mono text-xs">
            <div className="pb-5 border-b border-border">
              <span className="text-accent font-bold block mb-1">01</span>
              <div className="text-text-secondary text-xs tracking-wider uppercase mb-1">
                FULL STACK
              </div>
              <p className="text-text font-bold text-base tracking-wider">
                React · TypeScript · Node.js
              </p>
            </div>

            <div className="pb-5 border-b border-border">
              <span className="text-accent font-bold block mb-1">02</span>
              <div className="text-text-secondary text-xs tracking-wider uppercase mb-1">
                DATABASES
              </div>
              <p className="text-text font-bold text-base tracking-wider">
                MongoDB · PostgreSQL
              </p>
            </div>

            <div>
              <span className="text-accent font-bold block mb-1">03</span>
              <div className="text-text-secondary text-xs tracking-wider uppercase mb-1">
                PROBLEM SOLVING
              </div>
              <p className="text-text font-bold text-base tracking-wider">
                C++ · DSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
