import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./scrollDiscover.css";

export const ScrollDiscover = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="scroll-discover"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-once="true"
    >
      Scroll to discover
    </div>
  );
};
