import {Routes, Route} from "react-router-dom"
//Routes, Route import해서 링크 설정
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Navbar/>{/* 링크들 모음이 시작되기 전에 네비게이션 바에 이동경로가 보이게 설정
                   따라서 Springboot할 때 처럼 네비게이션 바를 각각의 html 마다 넣어줄 필요가 없음 */}
      <Routes> {/*링크들 모음집이라는 설정 */}
        {/*
        Java에서
        @GetMapping("/") 으로 주소를 설정해주는 것이
        React에서는 path="/"이다.

        Java에서
        return "html파일명"으로 보여줄 화면을 설정해주는 것이
        element={<Home/>} 이다.

        단, index.js는 React에서 이미 사용하고 있는 이름이기 때문에
        Index.js나 index로 시작하는 이름은 피하는게 좋음
        */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;