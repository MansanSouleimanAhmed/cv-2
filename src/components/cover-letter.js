import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import PortfolioImg from "../mimified-img/profile-image.jpg";
export default function CoverLetter(props) {
    console.log();
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props.transtion}
            className={"cover-letter"}>
            <div className={"portfolio-img"}>
                <img src={PortfolioImg} />
            </div>

            <u>
                <strong>
                    <p>{"Motivations"}</p>
                </strong>
            </u>
            <p>
                {`I am self-taught front-end developer. You can download right here my cover-letter and my cv if needed.`}
            </p>

            <div className={"cv-pdf"}>{"CV"}</div>
            <div className={"cover-letter-pdf"}>{"COVER LETTER"}</div>
        </motion.div>
    );
}
