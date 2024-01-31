
const ToolCard = (props) => {
  return (
    <div className="m-auto p-5 min-w-36 min-h-36 rounded-lg flex justify-center items-center border-2 border-black group">
      <img
        src={props.url}
        alt={props.alt}
        className="transition-all ease-in-out duration-1000 group-hover:scale-125">
      </img>
    </div>
  )
}

export default ToolCard