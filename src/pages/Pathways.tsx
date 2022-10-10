import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { useEffect, useState } from "react"
import { Pie } from "react-chartjs-2"
import minAGpa from "resources/min-a-gpa-2022.json"
const Pathways = () => {
  const [year, setYear] = useState("2020")
  const [chartData, setChartData] = useState({})
  const [filter, setFilter] = useState([
    {
      title: "All",
      selected: true,
    },
    {
      title: "Year",
      selected: false,
    },
    {
      title: "Institute",
      selected: false,
    },
  ])

  // group minAGpa by Institute

  useEffect(() => {
    minAGpa.reduce((acc, curr) => {
      if (!acc[curr.Institute]) {
        acc[curr.Institute] = []
      }
      acc[curr.Institute].push(curr)
      setChartData(acc)
      return acc
    }, {})
  }, [])

  useEffect(() => {
    console.log(chartData)
  }, [chartData])

  return (
    <div className="h-[200vh] items-center flex flex-col">
      <div className="flex justify-center items-center w-full">
        {filter.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-xl mx-2 cursor-pointer ${
                item.selected ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => {
                setFilter(
                  filter.map((item, i) => {
                    return {
                      ...item,
                      selected: i === index ? true : false,
                    }
                  })
                )
              }}
            >
              {item.title}
            </div>
          )
        })}
      </div>
      <div className="card">
        {Object.keys(chartData).map((key, index) => {
          return (
            <div className="shadow-md">
              <div>{key}</div>
              <div>
                {chartData[key].map((item) => {
                  return <div>{item.Programme}</div>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Pathways
