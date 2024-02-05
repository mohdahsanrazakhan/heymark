import { useState, useEffect } from 'react';
import './Work.css'

const Work = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projectData.json');
        const jsonData = await response.json();
        setData(jsonData);
      }
      catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  if(!data) {
    return <p>Loading...</p>
  }

  return (
    <section className='m-10 lg:m-24'>
      <h2 className='text-[4rem] sm:text-[6rem] text-center landing-none font-[clash-display-semibold] text-[#131313] dark:text-[#CEC1AE]'>Recent Work</h2>
          <div className='flex flex-wrap justify-center gap-5'>
          {data.map((item, index) => (
            <div className='bg-slate-500 rounded-md shadow-2xl hover:shadow-none transition duration-500'>
              <div key={index} className='sm:w-[500px] bg-[#131313] dark:dark:bg-slate-900 border-2 border-[#CEC1AE]/50 text-[#CEC1AE] p-2 rounded-md transition duration-500 hover:translate-x-2 hover:-translate-y-2 h-full flex flex-col jusitfy-between'>
                <div>
                  <img src={item.image} alt={item.title} className='rounded-md' />
                </div>
                <div className='flex flex-col justify-between items-center gap-2 p-5 text-center'>
                  <h2 className='text-2xl'>{item.title}</h2>
                  <p className='text-md'>{item.description}</p>
                  <div className='flex gap-2'>
                    <button className='bg-[#CEC1AE] border-2 border-[#CEC1AE] text-[#131313] font-semibold w-20 px-2 py-1 rounded-lg hover:tracking-widest transition-all duration-500'><a href={item.live} target='_blank'>Live</a></button>
                    <button className='bg-transparent border-2 border-[#CEC1AE] text-[#CEC1AE] font-semibold w-20 px-2 py-1 rounded-lg hover:tracking-widest transition-all duration-500'><a href={item.github} target='_blank'>GitHub</a></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
    </section>
  )
}

export default Work