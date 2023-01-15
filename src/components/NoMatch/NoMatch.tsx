import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export const NoMatch = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
    > no match</div>
  );
};
