import {useState, useEffect} from 'react';
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 400 // Adjust as needed

      // Set visibility based on the scroll position
      setIsVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='flex lg:flex-row flex-col gap-5 justify-evenly items-center h-min sm:h-[100vh] mx-10 lg:mx-28 overflow-hidden'>
      <div className={`title border-2 border-black rounded-xl lg:w-[45%] w-[100%] sm:h-[65%] text-center flex justify-center items-center transition ease-in-out duration-1000 p-10 ${isVisible ? 'visible' : ''}`}>
        <h2 className='text-[4rem] md:text-[6rem] landing-none font-[clash-display-semibold]'>About Me</h2>
      </div>

      <div className={`desc border-2 border-black rounded-xl lg:w-[45%] w-[100%] lg:h-[65%] flex justify-center items-center bg-black text-[#CFC1AE] transition ease-in-out duration-1000 leading-10 p-10 ${isVisible ? 'visible' : ''}`}>
        <ul className='list-disc text-[1rem] landing-none font-mono'>
          <li>Self-taught individual specializing in front-end web development.</li>
          <li>Specialized in React, a popular front-end library.</li>
          <li>Focus on creating responsive and user-friendly web applications.</li>
          <li>Passionate about exploring new technologies and techniques.</li>
          <li>Expresses gratitude for visiting the portfolio.</li>
        </ul>
      </div>
    </section>
  )
}

export default About