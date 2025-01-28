import React from "react";
import NavTabs from "./NavTabs";



function Header() {
    return (
        <header className="header">
            
            <h1>Molly Howard</h1>
            <div className="nav-border">
            <NavTabs/>
            </div>

        </header>
    )
}

export default Header;