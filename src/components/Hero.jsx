import { Helmet } from 'react-helmet';
import './Hero.css'
import Switcher from './Switcher';
import Snowfall from 'react-snowfall';

const Hero = () => {
  return (
    <>
    <Snowfall color='#b9e4f3ff' />
      <div className="sticky top-0 flex gap-1 flex-wrap justify-center bg-black text-neutral-200 p-4 text-center z-10">
        <p className="flex gap-2 items-center text-muted-foreground font-mono"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="24" height="24" /> This is my old portfolio.</p>
        <a
          href="https://mohdahsanrazakhan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient font-mono hover:text-indigo-400"
        >Visit my new portfolio</a>
      </div>

      <header className='flex flex-col flex-wrap justify-center items-center h-screen relative'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mohd Ahsan Raza Khan</title>
          <link rel="canonical" href="http://heymark.vercel.app" />
          <meta name="description" content="Portfolio of Mohd Ahsan Raza Khan, a front-end developer." />
          <meta name="keywords" content="portfolio, front-end, developer, react, web, application, developer, mohd ahsan raza khan" />
          <meta name="author" content="Mohd Ahsan Raza Khan" />
        </Helmet>

        <div className='fixed top-4 right-5 z-20'>
          <Switcher />
        </div>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='role text-[2rem] text-center text-[#131313] dark:text-[#CFC1AE]'>I'm a <span className='circle-sketch-highlight'>front-end developer</span></p>

          <div className="text-[4.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] landing-none font-[clash-display-semibold] text-[#131313] dark:text-[#CFC1AE]">
            <h1 data-shadow="MARK">
              <span id='M'>M</span>
              <span id='A'>A</span>
              <span id='R'>R</span>
              <span id='K'>K</span>
            </h1>
          </div>
        </div>

        <div className='text-center m-auto absolute bottom-16 sm:bottom-10 left-[1/2]'>
          <div className='border-2 border-black dark:border-[#CFC1AE] rounded-xl w-fit m-auto p-1'>
            <p className='animate-bounce font-semibold'><div className='w-4 h-4 rounded-full bg-[#131313] dark:bg-[#CFC1AE]'></div></p>
          </div>
          <small className='font-semibold font-mono tracking-wide text-[#131313] dark:text-[#CFC1AE]'>scroll down</small>
        </div>
      </header>
    </>
  )
}

export default Hero;