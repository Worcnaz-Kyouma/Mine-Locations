import Header from "./components/Header"
import Location from "./components/Location"

export default function Home() {
  return (
    <div>
      <Header />
      <Location pkIdLocation="1" fkIdWorld="1" nmLocation="Sugoma" xAxis="44" yAxis="44" zAxis="34"/>
      <Location pkIdLocation="2" fkIdWorld="1" nmLocation="Sus" xAxis="64" yAxis="120" zAxis="10"/>
      <Location pkIdLocation="3" fkIdWorld="1" nmLocation="Beusso" xAxis="10" yAxis="20" zAxis="-1"/>
      <Location />
    </div>
  )
}

