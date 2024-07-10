import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">숫자맞추기게임 1단계</Link></li>
                {/*<li><Link to="/game2">숫자맞추기게임 2단계</Link></li>*/}
                {/* 2단계 링크는 NavBar에 작성하지 않음
                    왜냐하면 1단계를 통과해야 2단계 링크를 보여줄 것이기 때문 */}
                <li><Link to="/todolist">todo리스트</Link></li>
                <li><Link to="/tictactoe">틱택토</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;