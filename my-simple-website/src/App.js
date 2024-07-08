import './App.css';
import Game from './component/Game';
import Game2 from './component/GameTwoStep';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>홈페이지에 오신 것을 환영합니다.</h1>
        <Game/>
        <Game2/>
      </header>
      <main>
        <section>
          <h2>about us</h2>
          <p>이 홈페이지는 간단한 리액트 홈페이지 입니다.</p>

        </section>
        <h2>Contact Us</h2>
        <p>Email : contact@email.com</p>
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;
