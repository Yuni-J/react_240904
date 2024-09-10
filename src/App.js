import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./component/Test"
import Test2 from "./component/Test2"
import Test3 from "./component/Test3"
import Test4 from "./component/Test4";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/test' element={<Test />}/>
            <Route path='/test2' element={<Test2 />}/>
            <Route path='/test3' element={<Test3 />}/>
            <Route path='/test4' element={<Test4 name="홍길동" color="grey" />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;   
