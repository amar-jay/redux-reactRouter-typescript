import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import Todo from "./Todo";
const App = () => {
    return (
        <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="todo" element={<Todo />} />
       <Route path="counter" element={<Counter />} />
    </Routes>
        </BrowserRouter>
    )
    }

    export default App