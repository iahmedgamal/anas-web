import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="slide-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="600"
      style={{
        backgroundImage: `url('')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};
