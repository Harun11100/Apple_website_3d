import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 760
      ? smallHeroVideo
      : heroVideo
  );

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2,
      y: 15,
      delay: 1,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -90,
      duration: 2,
      delay: 2,
    });
  }, []);

  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    const debouncedHandleVideo = () => {
      clearTimeout(timeoutId);
      const timeoutId = setTimeout(handleVideo, 200); // Add a debounce to avoid rapid firing
    };
    
    window.addEventListener("resize", debouncedHandleVideo);
    
    return () => window.removeEventListener("resize", debouncedHandleVideo);
  }, []);

  return (
    <section className="nav-height bg-black ">
      <div className="flex-center h-5/7 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 20 pro
        </p>
      </div>
      <div className="w-full flex-center pb-10">
        <video
          className="pointer-events-none"
          autoPlay
          muted
          playsInline
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-gray-100 text-xl">
          From $0.1/month or $99
        </p>
      </div>
    </section>
  );
};

export default Hero;
