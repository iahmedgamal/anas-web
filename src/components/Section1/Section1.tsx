import { useEffect } from 'react';
import './Section1.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section1 = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos='slide-up'
      data-aos-anchor-placement='top-center'
      data-aos-duration='600'
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/ds_6332.jpg?alt=media&token=cb76bf7c-8af5-45b3-bb8d-f65cff834125')`,
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


