import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos='slide-up'
      data-aos-anchor-placement='top-center'
      data-aos-duration='600'
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2012.55.35.jpeg?alt=media&token=33fb159a-4d87-44bc-9c16-88897f151cb9')`,
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
