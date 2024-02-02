import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-end items-center gap-10 mx-10 lg:mx-28 lg:px-4 py-5 border-t-2 border-black'>
      <div className='flex justify-center items-center'>
        <a className='social-link font-[clash-display-semibold] text-[2rem] sm:text-[2.5rem]' href="https://www.linkedin.com/in/mohd-ahsan-raza-khan/" target='_blank'>LinkedIn</a>
        <div className='link-arrow h-[2.5rem]'>
          <svg
            className="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(0, 0, 0)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '100%', height: '100%' }}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="17 17 17 7 7 7"></polyline>
          </svg>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <a className='social-link font-[clash-display-semibold] text-[2rem] sm:text-[2.5rem]' href="https://twitter.com/MdAhsanRazaKhan" target='_blank'>Twitter</a>
        <div className='link-arrow h-[2.5rem]'>
          <svg
            className="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(0, 0, 0)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '100%', height: '100%' }}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="17 17 17 7 7 7"></polyline>
          </svg>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <a className='social-link font-[clash-display-semibold] text-[2rem] sm:text-[2.5rem]' href="https://github.com/mohdahsanrazakhan" target='_blank'>GitHub</a>
        <div className='link-arrow h-[2.5rem]'>
          <svg
            className="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(0, 0, 0)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '100%', height: '100%' }}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="17 17 17 7 7 7"></polyline>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer