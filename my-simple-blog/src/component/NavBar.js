import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <li><Link to="/">Main</Link></li>
        </nav>
    )
}
export default NavBar;