const Cards = (props) => {
  const { title } = props
  return (
    <div className="h-full min-w-[400px]">
      <div className="h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center w-5/6">
        <div>{title}</div>
        <div>asd</div>
      </div>
    </div>
  )
}

export default Cards
