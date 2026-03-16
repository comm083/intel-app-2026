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
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ExampleInput from "./components/ExampleInput";
import NameCard from "./components/NameCard";
import TodoList from "./pages/TodoPage";
import ExamplePage from "./pages/ExamplePage";
import NotFoundPage from "./pages/NotFoundPage";
import Posts from "./components/Posts";
import Cat from "./components/Cat";
import RandomAnimal from "./components/RandomAnimal";

function App() {
  // const [click, setClick] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/randomAnimal" element={<RandomAnimal />} />
        <Route path="/*" element={<NotFoundPage />} />{" "}
        {/*| '*'<= 할당된 Route 이외 전부 |*/}
      </Routes>
      <Footer />
    </>
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
