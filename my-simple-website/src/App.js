import './App.css';
import Home from './component/Home';
import Game from './component/Game';
import Game2 from './component/GameTwoStep';
import {Route, Routes} from "react-router-dom";
import NavBar from './component/Layout/Navbar';
import Header from './component/Layout/Header';
import TodoList from './component/TodoList';
import TicTacToe from './component/TicTacToe/TicTacToe';
import TicTacToeTwoStep from './component/TicTacToe/TicTacToeTwoStep';
import MovieRating from './component/Movie/MovieGrade';
import Footer from './component/Layout/Footer';
/*
Module not found: Error: Can't resolve => 에러가 발생한 파일 위치 App.js 에서 해당 파일 위치 찾을 수 없음 이라는 에러 발생
'./component/NavBar' in 'C:\Users\user1\react-workspace\my-simple-website\src'
*/

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
        <Route path="/movieRate" element={<MovieRating/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;