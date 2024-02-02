import './Hero.css'

const Hero = () => {
  return (
    <header className='flex flex-col flex-wrap justify-center items-center h-screen relative'>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className='role text-[2rem] text-center'>I'm a <span className='circle-sketch-highlight'>front-end developer</span></p>

        <div className="text-[4.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] landing-none font-[clash-display-semibold]">
          <h1 data-shadow="MARK">
            <span id='M'>M</span>
            <span id='A'>A</span>
            <span id='R'>R</span>
            <span id='K'>K</span>
          </h1>
        </div>
      </div>

      <div className='text-center m-auto absolute bottom-16 sm:bottom-10 left-[1/2]'>
        <div className='border-2 border-black rounded-xl w-fit m-auto p-1'>
          <p className='animate-bounce font-semibold'>⚫</p>
        </div>
        <small className='font-semibold'>scroll down</small>
        </div>
    </header>
  )
}

export default Hero;