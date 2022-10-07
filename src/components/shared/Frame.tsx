import Header from "./Header"
const Frame = ({ children }: any) => {
  return (
    <div className="bg-blue-300">
      <Header />
      <div className=" min-h-[100vh]">{children}</div>
    </div>
  )
}

export default Frame
