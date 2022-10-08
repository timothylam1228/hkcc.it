import Cards from "components/links/Cards"
const UsefulLink = () => {
  const Telegrams = [
    {
      title: "HKCC - IT Public Channel",
      link: "https://t.me/hkccit",
    },
    {
      title: "HKCC - Public Channel",
      link: "https://t.me/hkcc",
    },
  ]
  return (
    <div className="min-h-screen flex-col flex justify-around">
      <div className="w-full h-[200px] justify-center items-center flex ">
        {Telegrams.map((item, index) => {
          return <Cards key={index} title={item.title} link={item.link} />
        })}
      </div>
    </div>
  )
}
export default UsefulLink
