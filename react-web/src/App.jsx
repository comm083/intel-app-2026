import React, { useState } from "react";
import UserCard from "./components/UserCard";
import DesignSystemPage from "./pages/DesignSystemPage";
import TeamPage from "./pages/TeamPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "./assets/bg.jpg";
import Example from "./components/Example";
import Like from "./components/Like";
import Counter from "./components/Counter";
import CafeMenu from "./components/CafeMenu";
import TestAsite from "./pages/TestAsite";
import TestBsite from "./pages/TestBsite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleInput from "./components/ExampleInput";
import NameCard from "./components/NameCard";
import TodoList from "./components/TodoList";

function App() {
  // const [click, setClick] = useState(false);

  return (
    <div>
      <TodoList />
    </div>

    /*개인 연습용 코드*/
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<TestAsite click={click} />} />
    //     <Route path="/TestBsite" element={<TestBsite setClick={setClick} />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
