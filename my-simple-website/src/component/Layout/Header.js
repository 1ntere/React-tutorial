import React from "react";

const Header = () => {
    return (
        /*
        ★ 오류가 발생한 코드
        const Header = () => {
            <header>
            <h1>My Simple Website</h1>
            </header>
        }
        ★ 오류 발생 원인
        return() 안에  html을 작성하지 않으면
        화면에 돌려보낼 html 코드가 없기 때문에 화면에서 보이지 않음
        */
        <div className="App">      
            <header className="App-header">
                <h1>✨찰흙의 포트폴리오✨</h1>
            </header>
        </div>
    )
}
export default Header;