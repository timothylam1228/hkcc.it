import Footer from "./Footer"
import Header from "./Header"
const Frame = ({ children }: any) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className=" min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  )
}

export default Frame
