
import { Route, Routes, useLocation } from "react-router-dom";
import style from "./App.module.css";
import About from "./components/about/About";
import Activities from "./components/activities/Activities";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";




function App() {
  const {pathname} = useLocation()
  


  const onSearch = ()=>{
    console.log("search")
  }

  return (
    <div className= {style.App}>
     {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/home' element={<Cards/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/activities' element={<Activities/>} />
      </Routes>
    </div>
  )
}

export default App
