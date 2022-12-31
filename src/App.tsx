import React, {  useState  } from 'react';
import './App.css';

const Section1 = () => (
  <div className='section1' style={{ overflow: 'hidden' }}>
    <img
      src='https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/ds_6332.jpg?alt=media&token=cb76bf7c-8af5-45b3-bb8d-f65cff834125'
      alt='a man in a suit and tie standing in front of a building'
      style={{ height: '100%', width: '100%' }}
    />
  </div>
);

const Section2 = () => (
  <div className='section2'>
    <img
      src='https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2012.55.35.jpeg?alt=media&token=33fb159a-4d87-44bc-9c16-88897f151cb9'
      alt='a rapper'
      style={{ height: '100%', width: '100%' }}
    />
  </div>
);

const Section3 = () => (
  <div className="section3">
    <h1>Section 3</h1>
    <p>Content for section 3 goes here</p>
  </div>
);

// Define the parent component that will contain the three section components
const App = () => {
  const [currentSection, setCurrentSection] = useState(1);

  // Method to handle scroll events and switch between sections
  const handleScroll = (event: { deltaY: number; }) => {
    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
      // Scrolling down, switch to the next section or the first section if on the last one
      if (currentSection < 3) {
        // setCurrentSection(currentSection + 1);
               setCurrentSection(currentSection + 1)

      } else {
        setCurrentSection(1);
      }
    } else {
      // Scrolling up, switch to the previous section or the last section if on the first one
      if (currentSection > 1) {
        setCurrentSection(currentSection - 1);
      } else {
        setCurrentSection(3);
      }
    }
  }

  // Render the currently displayed section based on the state
  let displayedSection;
  if (currentSection === 1) {
    displayedSection = <Section1 />;
  } else if (currentSection === 2) {
    displayedSection = <Section2 />;
  } else if (currentSection === 3) {
    displayedSection = <Section3 />;
  }

  return (
    <div className="app" onWheel={handleScroll}>
      {displayedSection}
    </div>
  );
}

export default App;