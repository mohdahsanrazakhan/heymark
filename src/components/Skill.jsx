import './Skill.css'
import ToolCard from './ToolCard'
// import SkillName from './SkillName'

const Skill = () => {
  return (
    <section className='min-h-screen'>
      <h1 className='text-[6rem] sm:text-[9rem] md:text-[12rem] landing-none font-[clash-display-semibold] text-center w-full m-auto text-[#131313] dark:text-[#CFC1AE]'>Skills</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center place-content-center w-fit m-auto gap-5'>
        <ToolCard skill="C++" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" />
        <ToolCard skill="JavaScript" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
        <ToolCard skill="MongoDB" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
        <ToolCard skill="ExpressJS" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="expressjs" />
        <ToolCard skill="ReactJS" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="reactjs" />
        <ToolCard skill="NodeJS" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" />
        <ToolCard skill="TailwindCSS" url="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="tailwindcss" />
        <ToolCard skill="Git" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" />
        <ToolCard skill="GitHub" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" />
        <ToolCard skill="Sass" url="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" />
      </div>
    </section>
  )
}

export default Skill