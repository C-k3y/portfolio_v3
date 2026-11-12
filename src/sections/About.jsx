import { LuFileCode2, LuLightbulb, LuRocket, LuUsers } from "react-icons/lu";

const highlights = [
  {
    icon: LuFileCode2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable codebase that stands the test of time.",
  },
  {
    icon: LuRocket,
    title: "Performance",
    description:
      "Optimizing for speed,security and high performant systems.",
  },
  {
    icon: LuUsers,
    title: "Collaboration",
    description: "Working closely with teams to build ideas into existence.",
  },
  {
    icon: LuLightbulb,
    title: "Innovation",
    description:
      "Staying ahead of the curve with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Developer in progress
              <span className="font-serif italic font-normal text-white">
                {" "}
                . Builder by curiosity.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an aspiring Software Engineer who enjoys turning ideas into things that actually work.
              </p>
              <p>
                I'm currently learning backend development and working toward understanding the bigger picture: 
                how to build applications from the interface to the systems powering them. 
                I'm still learning, still experimenting, and occasionally breaking things just to understand how to fix them. 
                That's part of the process.
              </p>
              <p>
                Beyond building applications, 
                I'm curious about smart contract security, cryptography, Zero-Knowledge Proofs, 
                and how decentralized systems can solve real-world problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I think some of the best learning happens when you try to build something you don't fully know how to build yet. 
                You run into errors, question your approach, read the documentation, try again, and eventually understand a little more than you did before. 
                That's how I want to grow: not by pretending to know everything, 
                but by staying curious enough to keep figuring things out."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};