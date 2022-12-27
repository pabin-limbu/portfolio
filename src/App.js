import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TestContact from "./components/TestPage";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="test" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
