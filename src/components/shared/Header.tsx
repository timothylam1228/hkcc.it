import { useState } from "react"
import Path from "route/path"
import ScreenScroolHook from "hook/ScreenScroolHook"
const Header = () => {
  const [open, setOpen] = useState(false)
  const scrollY = ScreenScroolHook()
  const items = [
    {
      label: "Home",
      path: Path.Home.Root,
    },
    {
      label: "Source",
      path: Path.Source.Root,
    },
  ]

  return (
    <div className={`flex sm:justify-center items-center w-full`}>
      <div
        className={`hidden sm:flex bg-white w-full  transition-all duration-500 justify-center ${
          scrollY > 0 ? " fixed top-0 shadow-md py-5 " : "py-10"
        }`}
      >
        <div className="flex w-4/5 justify-between items-center">
          <div className="text-2xl font-bold">S</div>
          <div className="flex flex-end">
            {items.map((item, index) => {
              return (
                <a key={index} href={item.path} className="text-xl px-2">
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full justify-between">
        <div
          className="text-2xl font-bold shadow-md w-full h-20 items-center flex px-5"
          onClick={() => setOpen(true)}
        >
          Open
        </div>

        <div
          className={`${
            open ? "w-full h-full" : "w-0 h-0 left-[-50%]"
          } absolute top-0 left-0 w-full h-full bg-yellow-500 transition-all transform duration-500`}
        >
          <div className="flex justify-start">
            <div
              className="text-2xl font-bold p-5"
              onClick={() => setOpen(false)}
            >
              Close
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-1/2">
            {items.map((item) => {
              return (
                <a href={item.path} className="text-xl px-2 text-black">
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
