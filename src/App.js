import React from "react";
import { HashRouter,Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
  <HashRouter>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
  )
}

export default App;
//React 앱이 실행되면 가장 먼저 호출되는 함수는 componentDidMount()

/*
정리해야할 것들!
1. React Life Cycle 함수들 정리
2. ES6 문법
*/