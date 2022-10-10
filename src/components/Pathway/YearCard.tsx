import { useState } from "react"
import aGPA2020 from "resources/min-a-gpa-2022.json"

const YearCard = (year: number) => {
  const [chartData, setChartData] = useState({})
  return (
    <div>
      <div className="flex justify-center items-center w-full">{year}</div>
    </div>
  )
}
export default YearCard
