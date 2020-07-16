import React, {Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";
import CvImg from "./../mimified-img/images.jpeg";
import ProjectOneImg from "./../mimified-img/pomodoro.jpg";
import ProjectTwoImg from "./../mimified-img/hairstylist.jpg";
import CvPDF from "./../../src/cv.pdf";
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
                    <a
                        href={
                            "https://github.com/MansanSouleimanAhmed/pomodoro-reactJS"
                        }
                        target="_blank">
                        <div className={"github-link"}>{"Github"}</div>
                    </a>
                    <a
                        href={"https://pomodoro-reactjs.netlify.app/"}
                        target="_blank">
                        <div className={"website-link"}>
                            {"Project One Link"}
                        </div>
                    </a>
                </div>
                <p>{"Project Two"}</p>
                <div class={"project"}>
                    <img src={ProjectTwoImg} />
                    <a
                        href={
                            "https://github.com/MansanSouleimanAhmed/Hairstylist"
                        }
                        target="_blank">
                        <div className={"github-link"}>{"Github"}</div>
                    </a>
                    <a
                        href={"https://hairstylist-coiffure.netlify.app"}
                        target="_blank">
                        <div className={"website-link"}>
                            {"Project Two Link"}
                        </div>
                    </a>
                </div>
                <p>{"CV"}</p>
                <div className={"cv-container"}>
                    <a href={CvPDF} download={"cv.pdf"}>
                        <div className={"cv-pdf"}>{"CV PDF"}</div>
                    </a>
                    <a
                        href={"https://github.com/MansanSouleimanAhmed/cv-2"}
                        target="_blank">
                        <div className={"cv"}>{"Github"}</div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
