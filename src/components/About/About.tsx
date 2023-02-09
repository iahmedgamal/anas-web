import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../models/Project';
import './About.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const ReadMore = ( {children} : any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 520) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </p>
  );
};

interface AboutProps {
  toggle: boolean;
  setToggleAbout: (toggle: boolean) => void;
}

export const About: React.FC<AboutProps> = ({ toggle, setToggleAbout }) => {
  const navRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeHandler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeHandler = () => {
    setToggleAbout(false);
  };

  const moreHandler = () => {
    setToggleAbout(!toggle);
  };

  return (
    <div>
      {toggle && (
        <>
          <div
            ref={navRef}
            className="about-navigation"
            data-aos="slide-right"
            data-aos-delay="100"
          >
            <div className="about-content">
              <div>
                <div className="title-close">
                  <a
                    href="https://www.instagram.com/anas.brahem/"
                    target="_blank"
                    rel="noreferrer"
                    className="about-title"
                  >
                    Anas Ibrahem
                  </a>
                  <div className="close-btn" onClick={closeHandler}>
                    <IoMdClose />
                  </div>
                </div>
                <div className="divider" />
                <div className="about-description">
                  <ReadMore
                    children={` Brahim started capturing stills in 2005 as a self-taught
                  photographer. In his work he continually explores the
                  mysterious relationships between people and their
                  environments, often utilizing an intimate approach.
               \n
                  Throughout his work process, he came to strongly believe in
                  the power of images in making one see what has been hidden,
                  remember the forgotten, and recenter the marginalized. In his
                  work, he employs photographic language to pursue questions
                  about the ways humans are empathetic, curious, vulnerable, and
                  understanding. Through the construction of his visual
                  language, Brahim aims to create work that evokes how an
                  image’s power lies in keeping us moving softly as onlookers
                  while also disclosing something to us about ourselves.
                \n
                  brahim also artwork delves into the complexities of
                  marginalized communities and questions the narrow
                  representations often portrayed in mass media. Through an
                  immersive approach and deep understanding of his subjects,
                  Brahim creates portraits that challenge societal
                  preconceptions and offer a more authentic view of the human
                  experience. Each project is a journey to the crossroads of
                  integration and exclusion, where the beauty and diversity of
                  marginalized individuals are brought to light.
                 \n
                  With artistic language, Brahim invites us to broaden our
                  understanding of the world and to challenge the narrow
                  narratives that so often shape our perceptions of it.`}
                  ></ReadMore>
                </div>
              </div>

              <section>
                <div className="connect-title"> Connect </div>
                <div className="about-divider" />
                <div className="cta-buttons">
                  <a
                    href="https://www.instagram.com/anas.brahem/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                  >
                    Instagram
                  </a>
                  <br></br>
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location.href = 'mailto:anassalehibra@gmail.com';
                      e.preventDefault();
                    }}
                  >
                    Email
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
function componentDidMount() {
  throw new Error('Function not implemented.');
}
