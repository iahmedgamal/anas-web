import { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Section3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="slide-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="600"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/Bild053_Neg.Nr.29A-2.jpg?alt=media&token=f85b89c5-2bd1-4c1b-bb88-f90427e560c6')`,
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
