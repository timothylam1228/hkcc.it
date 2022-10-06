import Header from "./Header"
const Frame = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-500 min-h-[100vh]">{children}</div>
    </div>
  )
}

export default Frame
