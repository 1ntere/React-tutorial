import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from './component/Main';
import Header from './component/Header';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}
export default App;