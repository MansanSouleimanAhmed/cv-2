import React from "react";
import ToggleButton from "./sidedrawer/togglebutton";
import MonCV from "../../src/cv.pdf";

const Toolbar = props => (
    <header className={"toolbar"}>
        <nav className={"toolbar-navigation"}>
            <div>
                <ToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className={"toolbar-name"}></div>
            <div className={"space"} />
            <div className={"toolbar-navigation-items"}>
                <h1>{"MANSAN SOULEIMAN AHMED"}</h1>
            </div>
        </nav>
    </header>
);
export default Toolbar;
