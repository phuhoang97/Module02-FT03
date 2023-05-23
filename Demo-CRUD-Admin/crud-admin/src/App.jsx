import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/page/AboutPage";
import ContactPage from "./components/page/ContactPage";
import HomePage from "./components/page/HomePage";
import NotFound from "./components/page/NotFound";
import LayoutNavbar from "./components/layout/LayoutNavbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleChangeSearch = (e) => setSearch(e.target.value);
  return (
    <div>
      <LayoutNavbar handleChangeSearch={handleChangeSearch} />
      <Routes>
        <Route path='/' element={<HomePage search={search} />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/user/add' element={<AddUser />}></Route>
        <Route path='/user/edit/:id' element={<EditUser />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
