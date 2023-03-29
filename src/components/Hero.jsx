import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-8 w-full">
      <div className="text-[100px] font-extrabold text-center font-serif tracking-tighter">
        The React Framework <br /> for the Web
      </div>
      <div className="text-center text-lg text-gray-600">
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </div>
    </div>
  );
};

export default Hero;
