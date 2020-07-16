import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import MonCV from "../../../src/cv.pdf";
import CoverLetter from "./../cover-letter";
import Contact from "../contac";
import Projects from "../projects";

const SideDrawer = props => {
    const divTransition = {
        in: {opacity: 1, y: "0%"},
        out: {opacity: 0, y: "-100%"},
    };
    return (
        <div className={`side-drawer${props.show ? "-open" : "-close"}`}>
            <Router>
                <ul>
                    <li className={"nav-item"}>
                        <Link to={"/cover-letter"}>{"COVER LETTER"}</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/projects"}>{"PROJECTS"}</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/contact"}>{"CONTACT"}</Link>
                    </li>
                </ul>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route
                            path={"/cover-letter"}
                            render={props => (
                                <CoverLetter
                                    {...props}
                                    transtion={divTransition}
                                />
                            )}
                        />
                        <Route
                            path={"/projects"}
                            render={props => (
                                <Projects
                                    {...props}
                                    transtion={divTransition}
                                />
                            )}
                        />
                        <Route
                            path={"/contact"}
                            render={props => (
                                <Contact {...props} transtion={divTransition} />
                            )}
                        />
                    </Switch>
                </AnimatePresence>
            </Router>
        </div>
    );
};

export default SideDrawer;
