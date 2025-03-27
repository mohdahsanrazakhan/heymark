import { Helmet } from 'react-helmet';
import './Hero.css'
import Switcher from './Switcher';

const Hero = () => {
  return (
    <header className='flex flex-col flex-wrap justify-center items-center h-screen relative'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohd Ahsan Raza Khan</title>
        <link rel="canonical" href="http://heymark.vercel.app" />
        <meta name="description" content="Portfolio of Mohd Ahsan Raza Khan, a front-end developer." />
        <meta name="keywords" content="portfolio, front-end, developer, react, web, application, developer, mohd ahsan raza khan" />
        <meta name="author" content="Mohd Ahsan Raza Khan" />
      </Helmet>

      <div className='fixed top-5 right-5'>
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
  )
}

export default Hero;