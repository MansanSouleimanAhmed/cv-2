import React, {Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";
import CvImg from "./../mimified-img/images.jpeg";
import ProjectOneImg from "./../mimified-img/hairstylist.jpg";
import ProjectTwoImg from "./../mimified-img/begal.jpg";
export default function Projects(props) {
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props.transtion}>
            <div className={"project-container"}>
                <p>{"Project One"}</p>
                <div class={"project"}>
                    <img src={ProjectOneImg} />
                    <div className={"github-link"}>{"Github"}</div>
                    <div className={"website-link"}>{"Project One Link"}</div>
                </div>{" "}
                <p>{"Project Two"}</p>
                <div class={"project"}>
                    <img src={ProjectTwoImg} />
                    <div className={"github-link"}>{"Github"}</div>
                    <div className={"website-link"}></div>
                    <div className={"website-link"}>{"Project Two Link"}</div>
                </div>
                <p>{"CV"}</p>
                <div className={"cv-container"}>
                    <div className={"cv-pdf"}>{"CV PDF"}</div>
                    <div className={"cv"}>{"Github"}</div>
                </div>
            </div>
        </motion.div>
    );
}
