import './Contact.css'

const Contact = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center items-center min-h-[100vh] lg:mx-28">
      <div className="flex flex-col mx-10 sm:m-0 sm:w-1/2">
        <h2 className="text-[3.5rem] md:text-[6rem] w-1/2 landing-none font-[clash-display-semibold] text-[#131313] dark:text-[#CFC1AE]">Let's work together</h2>
        <svg className="arrow m-auto dark:stroke-[#CFC1AE]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '10%', height: '10%' }}>
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <a className="email text-[1.2rem] sm:text-[1.5rem] sm:pt-1 pt-3 landing-none sm:font-[clash-display-semibold] font-mono sm:font-normal font-semibold ml-auto text-[#131313] dark:text-[#CFC1AE]" href="mailto:khanmohdahsanraza@gmail.com">khanmohdahsanraza@gmail.com</a>
      </div>
      <div className="flex flex-wrap px-10 mb-10 lg:mb-0 sm:px-0 w-full sm:w-1/2 justify-center items-center">
        <p className="text-[1.2rem] landing-none font-mono w-[25rem] lg:ml-auto m-auto text-center lg:text-left text-[#131313] dark:text-[#CFC1AE]">I'm currently available for new work. Let me know if you're looking for a Front-end Developer. Let's talk about the next big thing!</p>
      </div>
    </section>
  )
}

export default Contact