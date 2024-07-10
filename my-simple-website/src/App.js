import './App.css';
import Home from './component/Home';
import Game from './component/Game';
import Game2 from './component/GameTwoStep';
import {Route, Routes} from "react-router-dom";
import NavBar from './component/Navbar';
import Header from './component/Header';
import TodoList from './component/TodoList';
import TicTacToe from './component/TicTacToe';
import TicTacToeTwoStep from './component/TicTacToeTwoStep';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes> {/* 링크 모음 - 예전에는 Switch라고 작성했지만 v6부터 Routes 사용 */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/game" element={<Game/>}></Route>
        <Route path="/game-twoStep" element={<Game2/>}></Route>
        <Route path="/todolist" element={<TodoList/>}></Route>
        <Route path="/tictactoe" element={<TicTacToe/>}></Route>
        <Route path="/tictactoetwostep" element={<TicTacToeTwoStep/>}></Route>
      </Routes>
    </div>
  );
}

export default App;