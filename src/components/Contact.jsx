import './Contact.css'

const Contact = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center items-center h-[100vh] lg:mx-28">
      <div className="flex flex-col w-1/2">
        <h2 className="text-[3.5rem] md:text-[6rem] w-1/2 landing-none font-[clash-display-semibold]">Let's work together</h2>
        <svg className="arrow m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(0, 0, 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '10%', height: '10%' }}>
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <a className="email sm:text-[1.5rem] sm:pt-1 pt-3landing-none sm:font-[clash-display-semibold] font-mono sm:font-normal font-semibold ml-auto" href="mailto:khanmohdahsanraza@gmail.com">khanmohdahsanraza@gmail.com</a>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <p className="text-[1.2rem] landing-none font-mono w-[25rem] lg:ml-auto m-auto text-center lg:text-left prose ">I'm currently available for new work. Let me know if you're looking for a Front-end Developer. Let's talk about the next big thing!</p>
      </div>
    </section>
  )
}

export default Contact