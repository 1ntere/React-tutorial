import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            {/*
            Java에서는 <a href="/">Home</a>로 작성했다면
            React에서는 <Link to="/">Home</Link>로 작성
            a와 Link가 같고
            href와 to가 같음
            */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </nav>
    )
}
export default Navbar;