import { useCallback, useEffect, useState } from "react"

const ScreenScroolHook = () => {
  const [scrollY, setScrollY] = useState(0)

  const listener = useCallback(() => {
    setScrollY(window.pageYOffset)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [listener])

  return scrollY
}

export default ScreenScroolHook
