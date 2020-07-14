import React from "react";
import MonCV from "../../images/cv.pdf";
const SideDrawer = props => (
    <div className={`side-drawer${props.show ? "-open" : "-close"}`}>
        <div className={"motivation-sidebar-laptop"}>
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
        <div className={"container-info-sidebar"}>
            <div className={"picture-container-square-sidebar"}>
                <div className={"picture-container-round"} />
            </div>
            <div className={"text-container-sidebar"}>
                <strong>
                    <p>{"Name :"}</p>
                </strong>
                <p>{" Mansan SOULEIMAN AHMED"}</p>
                <strong>
                    <p>{"Mail :"}</p>
                </strong>
                <p>{" mansan.souleiman.ahmed@gmail.com"}</p>
                <strong>
                    <p>{"Phone number :"}</p>
                </strong>
                <p>{"32 (0) 465/ 34 74 37"}</p>

                <strong>
                    <p>{"Addresse :"}</p>
                </strong>
                <p>{"Rue Sohet n°11"}</p>
                <strong>
                    <p>{"Zip Postal Code : "}</p>
                </strong>
                <p>{"4000"}</p>
                <strong>
                    <p>{"Town :"}</p>
                </strong>
                <p>{"Liège"}</p>
                <u>
                    <strong>
                        <p>{"Objectvie"}</p>
                    </strong>
                </u>

                <p>
                    {`I'm looking for a job as a front-end web developer. I am a junior web
                    developer who is currently doing an internship in a company.`}
                </p>
                <u>
                    <strong>
                        <p>{"Projects"}</p>
                    </strong>
                </u>
            </div>
            <div className={"col-portfolio-sidebar"}>
                <div className={"cv-side-ref"}>
                    <strong>
                        <p>{"React project's references"}</p>
                    </strong>
                </div>
                <div
                    className={"img-portfolio-cv-sidebar"}
                    id={"img-portfolio-cv-project-1-sidebar"}>
                    <div className={"buttons-container-sidebar"}>
                        <a
                            href={
                                "https://github.com/mansan1souleiman1ahmed/React-project"
                            }
                            target={"_blank"}>
                            <button
                                className={"button-github-sidebar"}
                                type={"button"}>
                                {"Github"}
                            </button>
                        </a>
                        <a
                            href={
                                "https://xenodochial-carson-a9c6e3.netlify.com/"
                            }
                            target={"_blank"}>
                            <button
                                className={"button-website-sidebar"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </a>
                    </div>
                </div>
                <div className={"cv-side-ref"}>
                    <strong>
                        <p>{"NPM project's references"}</p>
                    </strong>
                </div>
                <div
                    className={"img-portfolio-cv-sidebar"}
                    id={"img-portfolio-cv-project-2-sidebar"}>
                    <div className={"buttons-container-sidebar"}>
                        <a
                            href={
                                "https://github.com/mansan1souleiman1ahmed/Project-WorkSpace "
                            }
                            target={"_blank"}>
                            <button
                                className={"button-github-sidebar"}
                                type={"button"}>
                                {"Github"}
                            </button>
                        </a>
                        <a
                            href={
                                "https://www.npmjs.com/package/@mansan/holidates"
                            }
                            target={"_blank"}>
                            <button
                                className={"button-website-sidebar"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </a>
                    </div>
                </div>
                <div className={"cv-side-ref"}>
                    <strong>
                        <p>{"Angular&&Express project"}</p>
                    </strong>
                </div>
                <div
                    className={"img-portfolio-cv-sidebar"}
                    id={"img-portfolio-cv-project-4-sidebar"}>
                    <div className={"buttons-container-sidebar"}>
                        <a
                            href={
                                "https://github.com/mansan1souleiman1ahmed/simple-forum"
                            }
                            target={"_blank"}>
                            <button
                                className={"button-github-sidebar"}
                                type={"button"}>
                                {"Github"}
                            </button>
                        </a>
                        <a
                            href={
                                "https://sheltered-earth-29851.herokuapp.com/?fbclid=IwAR1JtZxcwGkoHoH4iPU80AvnLluCOQHJOcn8SaxF80U8st5_CC159gwBvP8"
                            }
                            target={"_blank"}>
                            <button
                                className={"button-website-sidebar"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </a>
                    </div>
                </div>
                <div className={"cv-side-ref"}>
                    <div className={"cv-side-ref"}>
                        <strong>
                            <p>{"CV's reference"}</p>
                        </strong>
                    </div>
                    <div
                        className={"img-portfolio-cv-sidebar"}
                        id={"img-portfolio-cv-project-3-sidebar"}>
                        <div className={"buttons-container-sidebar"}>
                            <a
                                href={
                                    "https://github.com/mansan1souleiman1ahmed/CV"
                                }
                                target={"_blank"}>
                                <button
                                    className={"button-github-sidebar"}
                                    type={"button"}>
                                    {"Github"}
                                </button>
                            </a>
                            <a href={MonCV} download={"cv.pdf"}>
                                <button
                                    className={"button-website-sidebar"}
                                    type={"button"}>
                                    {"CV PDF"}
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className={"motivation-sidebar-tablett-gsm"}>
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
                </div>
            </div>
        </div>
    </div>
);
export default SideDrawer;
