import "./App.css";
import NavHead from "./Components/NavHead";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCatalogue from "./tabs/Catalogue/ViewCatalogue";
import HomeTab from "./tabs/HomePage/HomeTab";
import Addnew from "./tabs/AddPage/AddNew"
import CourseDetails from "./tabs/Catalogue/CourseDetails";
import UpdateTab from "./tabs/UpdatePage/UpdateTab";
function App() {
  return (
    <div className="App">
      <NavHead />
      <BrowserRouter>
        <Routes>
          <Route path="/catalogue" element={<ViewCatalogue />}></Route>
          <Route path="/home" element={<HomeTab />}></Route>
          <Route path="/add" element={<Addnew />}></Route>
          <Route path="/course" element={<CourseDetails />}></Route>
          <Route path="/update" element={<UpdateTab />}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
