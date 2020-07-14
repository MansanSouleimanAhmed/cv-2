import React from "react";
import ToggleButton from "./sidedrawer/togglebutton";
import MonCV from "../images/cv.pdf";

const Toolbar = props => (
    <header className={"toolbar"}>
        <nav className={"toolbar-navigation"}>
            <div>
                <ToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className={"toolbar-name"}>
                <a href={"/"}>
                    <p>{"Mansan SOULEIMAN AHMED"}</p>
                </a>
            </div>
            <div className={"space"} />
            <div className={"toolbar-navigation-items"}>
                <ul>
                    <li>
                        <a href={MonCV} download={"cv.pdf"}>
                            <img
                                src={
                                    "https://img.icons8.com/plasticine/50/000000/pdf-2.png"
                                }
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href={
                                "https://www.linkedin.com/in/mansan-souleiman-ahmed-098400150/"
                            }
                            target={"_blank"}>
                            <img
                                src={
                                    "https://img.icons8.com/material-outlined/50/000000/linkedin.png"
                                }
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://github.com/mansan1souleiman1ahmed"}
                            target={"_blank"}>
                            <img
                                src={
                                    "https://img.icons8.com/material-outlined/50/000000/github.png"
                                }
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;
