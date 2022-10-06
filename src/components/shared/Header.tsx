import { useState } from "react"
import Path from "route/path"
const Header = () => {
  const [open, setOpen] = useState(false)
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
    <div className="flex sm:justify-center items-center w-full">
      <div className="hidden sm:flex w-4/5 justify-between items-center ">
        <div className="text-2xl font-bold md:none lg:flex">S</div>
        <div className="flex-end">
          {items.map((item) => {
            return (
              <a href={item.path} className="text-xl px-2">
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex sm:hidden w-full justify-between">
        <div className="text-2xl font-bold" onClick={() => setOpen(true)}>
          Open
        </div>
        {open && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-500 transition-all">
            <div className="flex justify-end">
              <div
                className="text-2xl font-bold"
                onClick={() => setOpen(false)}
              >
                Close
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              {items.map((item) => {
                return (
                  <a href={item.path} className="text-xl px-2">
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header
