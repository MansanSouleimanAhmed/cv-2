import React from "react";
import {AnimatePresence, motion} from "framer-motion";
export default function CoverLetter(props) {
    console.log();
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props.transtion}>
            <div>
                <u>
                    <strong>
                        <p>{"Motivation"}</p>
                    </strong>
                </u>
                <p>
                    {`I am a former accounting student who has converted to web development. I  studied the basics of programming with online courses like codeacademy.com and freecodecamp.org before enrolling in Becode (Liège). During my training I had the opportunity to benefit from an active pedagogy course, the objective of which was to develop professional skills in an incubator that simulates a professional web developer environment. Also, I was able to develop my ability to learn quickly and efficiently. The training also taught me to cultivate resourcefulness, and the ability to manage projects as a team. I had the opportunity to create projects using different technologies both front-end and back-end. I can mention React and Angular 7 for the front end and NodeJS, Laravel and for the back end. However, I must admit that I am more interested in a career in front-end, and I am currently learning React and libraries that makes it easier to manage states like Redux. I am a motivated person who lives for coding. I know that I have a lot to learn, and I am eager to learn new technologies. As Plato said 'I know only one thing, it is that I know nothing!'but I never get tire from learning what I'm passionate about. 
                        `}
                </p>
            </div>
        </motion.div>
    );
}
