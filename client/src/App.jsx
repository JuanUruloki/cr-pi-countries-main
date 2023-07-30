import { Route, Routes, useLocation } from "react-router-dom";
import { About, Home } from "./Views";
import Form from "./Views/Form/Form";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path='/detail/:id' element={<Detail/>} /> */}
        <Route path="/form" element={<Form />} />
        {/* <Route path='/activities' element={<Activities/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
