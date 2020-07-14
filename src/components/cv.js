import React from "react";

export default function CV() {
    return (
        <div className={"main-container"}>
            <div className={"container-info"}>
                <div className={"picture-container-square"}>
                    <div className={"picture-container-round"} />
                </div>
                <div className={"text-container"}>
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
                        {`I'm looking for a job as a front-end web developer.I am a junior web developer 
                        who is currently doing an internship in a company.`}
                    </p>
                    <u>
                        <strong>
                            <p>{"Projects"}</p>
                        </strong>
                    </u>
                </div>
                <div className={"col-portfolio"}>
                    <div className={"cv-side-container"}>
                        <div className={"cv-side-ref"}>
                            <strong>
                                <p>{"React project's references"}</p>
                            </strong>
                        </div>
                        <div
                            className={"img-portfolio-cv"}
                            id={"img-portfolio-cv-project-1"}>
                            <div className={"buttons-container"}>
                                <a
                                    href={
                                        "https://github.com/mansan1souleiman1ahmed/React-project"
                                    }
                                    target={"_blank"}>
                                    <button
                                        className={"button-github"}
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
                                        className={"button-website"}
                                        type={"button"}>
                                        {"Website"}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"cv-side-container"}>
                        <div className={"cv-side-ref"}>
                            <strong>
                                <p>{"NPM project's references"}</p>
                            </strong>
                        </div>
                        <div
                            className={"img-portfolio-cv"}
                            id={"img-portfolio-cv-project-2"}>
                            <div className={"buttons-container"}>
                                <a
                                    href={
                                        "https://github.com/mansan1souleiman1ahmed/Project-WorkSpace "
                                    }
                                    target={"_blank"}>
                                    <button
                                        className={"button-github"}
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
                                        className={"button-website"}
                                        type={"button"}>
                                        {"Website"}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"cv-side-container"}>
                        <div className={"cv-side-ref"}>
                            <strong>
                                <p>{"Angular&Express's reference"}</p>
                            </strong>
                        </div>
                        <div
                            className={"img-portfolio-cv"}
                            id={"img-portfolio-cv-project-3"}>
                            <div className={"buttons-container"}>
                                <a
                                    href={
                                        "https://github.com/mansan1souleiman1ahmed/simple-forum"
                                    }
                                    target={"_blank"}>
                                    <button
                                        className={"button-website"}
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
                                        className={"button-github"}
                                        type={"button"}>
                                        {"Website"}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"cv-side-container"}>
                        <div className={"cv-side-ref"}>
                            <strong>
                                <p>{"CV's reference"}</p>
                            </strong>
                        </div>
                        <div
                            className={"img-portfolio-cv"}
                            id={"img-portfolio-cv-project-4"}>
                            <div className={"buttons-container"}>
                                <a
                                    href={
                                        "https://github.com/mansan1souleiman1ahmed/CV"
                                    }
                                    target={"_blank"}>
                                    <button
                                        className={"button-github"}
                                        type={"button"}>
                                        {"Github"}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container-cv"}>
                <div className={"col-cv"}>
                    <div className={"col-left"}>
                        <div className={"content-col-right"}>
                            <p> {"PERSONAL STATEMENT"} </p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <p>
                                {`I am a highly organized and efficient young individual. My motivation and commitment will prove excellent in challenging work environments. I will be professional, productive and eager to be a proactive member of your team. I would describe myself as a very well-spoken person and passionate about coding.`}
                            </p>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p> {"SKILLS"} </p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"} id={"skills"}>
                            <u>
                                <strong>
                                    <span className={"p-languages-strong"}>
                                        {"Programming languages"}
                                    </span>
                                </strong>
                            </u>
                            <br />
                            <span className={"p-languages"}>
                                {
                                    "HTML5, CSS3 && SASS, Javascript, Node JS (Basics), React"
                                }
                            </span>
                            <br />
                            <strong>
                                <u>
                                    <span className={"languages"}>
                                        {"Languages"}
                                    </span>
                                </u>
                            </strong>
                            <div className={"right-grid"}>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"French"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"English"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"Dutch"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Notions"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-left"}>
                                        <p> {"Somali"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p>{"EDUCATION"}</p>
                        </div>
                    </div>

                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <div className={"right-grid"} id={"education-flex"}>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <strong>
                                            <p> {"05/2019–03/2020"} </p>
                                        </strong>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Internship at Becode Liège"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <strong>
                                            <p> {"02/2018–05/2019"} </p>
                                        </strong>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {"Self-taught HTML5, CSS3  and JS"}
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <strong>
                                            <p> {"2014–2018"} </p>
                                        </strong>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {
                                                "Bachelor’s Degree in accounting at HEPL(-1 courses)"
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <strong>
                                            <p> {"2013–2014"} </p>
                                        </strong>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {
                                                "First year in university (University of Liège)"
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <strong>
                                            <p> {"2012–2013"}</p>
                                        </strong>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"CESS"} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p>{"LEISURE"}</p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <p>
                                {`I enjoy socializing and planning outings with both friends and family, often walking or running to accomplish a healthy amount of exercise. I like practicing Fitness to collect my forces to face all the bugs.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
