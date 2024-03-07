import AppBar from "./components/AppBar/index"
import Banner from "./components/Banner/index"
import Button  from "./components/Button/index"
import Date  from "./components/Date/index"
import Row  from "./components/Row/index"




export default function App() {
  return (
  <div className="w-full h-full flex flex-col justify-stretch items-stretch">
    <AppBar />
    <Banner />
    <Button />
    <Date />
    <Row />
  </div>
  )
}