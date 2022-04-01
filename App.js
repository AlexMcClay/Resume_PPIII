import React, { useState } from "react";

function App() {
    const [resume, setResume] = useState(false);
    const [coverLetter, setCoverLetter] = useState(false);

    if (resume) {
        return <Resume />;
    }
    if (coverLetter) {
        return <CL />;
    }

    return (
        <div style={{ height: "60vh" }}>
            <div className="center-content-flex" style={{ height: "100%" }}>
                <button className="btn" onClick={() => setResume(true)}>
                    Resume
                </button>{" "}
                <button className="btn" onClick={() => setCoverLetter(true)}>
                    Cover Letter
                </button>
            </div>
        </div>
    );
}

function CL() {
    return (
        <div className="center-content-flex">
            <div style={{ height: "100vh", width: "100vw" }}>
                <div className="grid">
                    <GridItem pos={[1, 5, 1, 2]}>
                        <div
                            style={{
                                borderRight: "solid",
                                borderWidth: "2px",
                                borderColor: "#646a83",
                                height: "80%",
                                paddingLeft: "40px",
                            }}
                        >
                            <p>Adealide, Australia</p>
                            <br />
                            <p className="time">1st of April, 2022</p>
                            <br />
                            <br />
                            <br />
                            <p>To David McKay,</p>
                            <h3>Frontend Developer for Frisk</h3>
                        </div>
                    </GridItem>
                    <GridItem pos={[5, 7, 1, 2]}>
                        <Contact />
                    </GridItem>
                    <GridItem pos={[1, 6, 2, 7]}>
                        <div
                            style={{
                                paddingLeft: "40px",
                                height: "80%",
                            }}
                        >
                            <p>
                                I am writing to apply for the position of
                                Fron-end Developer at Frisk. I am currently
                                studying in my third year of my Bachelor of
                                Computer Science, Majoring in Artificial
                                Intelligence at the University of Adelaide, and
                                with an expected completion date of December
                                2022.
                            </p>
                            <br />
                            <p>
                                I find the idea of joining a growing company
                                interesting, as I feel I can provide the
                                experience and software quality that you are
                                looking for. I also hope to learn from the other
                                team members so we can have a stronger bond and
                                work better together as a team.
                            </p>
                            <br />
                            <p>
                                I am extremely familiar with all the
                                technologies that you have listed in the
                                application. I am currently working on a
                                Full-Stack web app that uses React, Node.js,
                                Express, and SQL in my free time (the repository
                                is private currently, I do plan to make the app
                                public in the future). Furthermore, I've also
                                worked on a Covid-19 Contact Tracing Web
                                Application in which I was a full-stack
                                developer. I am also extremely proficient in
                                HTML, CSS, and Javascript as I have used them
                                for most of my career.I am fully confident in my
                                knowledge of those technologies, and others that
                                could be an asset to your company.
                            </p>
                            <br />
                            <p>
                                I am a keen and fast learner, so I should be
                                able to handle any tasks that you throw at me. I
                                learned React.js by myself in my free time to
                                develop the Full-Stack app in my free time that
                                I mentioned. In the Covid-19 Contact Tracing
                                App, I managed to lead the team and assign tasks
                                to the other members to work efficiently and I
                                personally made sure they understood what they
                                had to do so that we could deliver the app on
                                time.
                            </p>
                            <br />
                            <p>
                                I always know that I can improve in some
                                aspects, and I believe that I am a perfect fit
                                for your company in which I can grow as a person
                                and provide quality software for the company.
                            </p>
                            <br />
                            <p>
                                I look forward to your response regarding my
                                application.
                            </p>
                            <br />
                            <p>Yours Sincerely,</p>
                            <br />
                            <p>
                                <i>Alex McClay</i>
                            </p>
                        </div>
                    </GridItem>
                </div>
            </div>
        </div>
    );
}

function Resume() {
    return (
        <div className="center-content-flex">
            <div style={{ height: "100vh", width: "100vw" }}>
                <div className="grid">
                    <GridItem pos={[1, 5, 1, 2]}>
                        <div
                            style={{
                                borderRight: "solid",
                                borderWidth: "2px",
                                borderColor: "#646a83",
                                height: "80%",
                            }}
                        >
                            <h1>ALEX MCCLAY</h1>
                            <b>
                                <p>
                                    <i>
                                        Computer Science student, majoring in
                                        Artificial Intelligence
                                    </i>
                                </p>
                                <p>
                                    <i>Final Year</i>
                                </p>
                            </b>
                            <br />
                            <br />
                            <br />
                            <p className="time">
                                <i>
                                    This Resume was built using React.js and
                                    CSS. Code is available on my Github
                                </i>
                            </p>
                        </div>
                    </GridItem>
                    <GridItem pos={[5, 7, 2, 7]}>
                        <div>
                            <Hr />
                            <h3>Skills</h3>
                            <ul>
                                <li>
                                    <b>C++ (2+ years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>Python (2+ years)</b>
                                    <Squares n={3} />
                                </li>
                                <li>
                                    <b>Javascript (2+ years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>React.js (1 years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>CSS (2+ years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>Node.js (1 years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>Express.js (1 years)</b>
                                    <Squares n={4} />
                                </li>
                                <li>
                                    <b>SQL (1 years)</b>
                                    <Squares n={3} />
                                </li>
                            </ul>
                            <h3>Languages</h3>
                            <ul>
                                <li>
                                    <b>English</b>
                                    <Squares n={5} />
                                </li>
                                <li>
                                    <b>Spanish</b>
                                    <Squares n={5} />
                                </li>
                            </ul>
                            <h3>References</h3>
                            <h4>Ariff Nordin (Web-App Developer)</h4>
                            <ul>
                                <li>
                                    <div className="center-content-vertical">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>

                                        <span
                                            style={{
                                                marginLeft: "20px",
                                            }}
                                        >
                                            ariffnordin999@gmail.com
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <h4>Germin Chan (Savings App Developer)</h4>
                            <ul>
                                <li>
                                    <div className="center-content-vertical">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>

                                        <span
                                            style={{
                                                marginLeft: "20px",
                                            }}
                                        >
                                            Germincjk@gmail.com
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <h4>
                                Sarune Dakkadan (Algorithm and Data Structures
                                Analyst
                            </h4>
                            <ul>
                                <li>
                                    <div className="center-content-vertical">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                        </svg>

                                        <span
                                            style={{
                                                marginLeft: "20px",
                                            }}
                                        >
                                            sarunedakkadan@gmail.com
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </GridItem>
                    <GridItem pos={[1, 5, 2, 7]}>
                        <div
                            style={{
                                borderRight: "solid",
                                borderWidth: "2px",
                                borderColor: "#646a83",
                                height: "100%",
                            }}
                        >
                            <Hr />
                            <h3>PROFILE</h3>
                            <Hr />
                            <p>
                                Dedicated Computer Science student at the
                                University of Adelaide, proficient in Web-Dev
                                and Artificial Intelligence. Eager to secure an
                                entry-level position in AI, or Web-Development.
                            </p>

                            <h3>EDUCATION</h3>
                            <Hr />
                            <h4>
                                Computer Science - Distinction Average,
                                University of Adelaide
                            </h4>
                            <p className="time">2022-12 — 2020-02</p>
                            <p>
                                Majoring in Artificial Intelligence. Important
                                Courses that I've Taken: Web & Database
                                Computing, Computer Systems, Algorithm & Data
                                Structure Analysis, Parallel and Distributed
                                Computing
                            </p>
                            <h4>Highschool - The Grange School (Chile)</h4>
                            <p className="time">2018-12 — 2009-03</p>
                            <p>
                                Participated in the 2016 National Robotics
                                Tournament in a group of five students competing
                                against 20 Chilean high schools.
                            </p>
                            <p>
                                I was the Bass Player for the school band for
                                five years (2013-2018).
                            </p>
                            <h3>PROFESSIONAL/PERSONAL PROJECTS</h3>
                            <Hr />
                            <h4>
                                Dungeons & Dragons Web Application (Personal
                                Project, React.js, Node.js, Express.js, SQL,
                                Javascript)
                            </h4>
                            <p className="time">
                                Current — 2021-06 (~10 months and counting)
                            </p>
                            <p>
                                I wanted to make a Web App for one of my
                                favorite hobbies, so this is a personal project
                                that I do in my free time. I learned a lot
                                making this project, I learned React.js by
                                myself, and the Web App is a large single-page
                                React app. This is an extensive app that i wish
                                to complete. The repository is private on
                                Github. I do plan to make the Web App public in
                                the future.
                            </p>
                            <h4>
                                Covid-19 Contact Tracing Web Application (Uni
                                Project, Express.js, Node.js, SQL, Javascript)
                            </h4>
                            <p className="time">
                                2021-06 — 2021-04 (2 months){" "}
                            </p>
                            <p>
                                This was the first time I did any project
                                related to Web Development, and I learned a lot
                                of important skills in this course (Web &
                                Database Computing). My tasks were: Doing around
                                half of the HTML pages, Handling half of the CSS
                                and organizing the CSS sheets. Doing most of the
                                backend in Express.js, specifically serving
                                dynamic content, handling sessions, user-login
                                and user-creation.
                            </p>
                            <h3>EMPLOYMENT HISTORY</h3>
                            <Hr />
                            <h4>None</h4>
                        </div>
                    </GridItem>
                    <GridItem pos={[5, 7, 1, 2]}>
                        <Contact />
                    </GridItem>
                </div>
            </div>
        </div>
    );
}

function GridItem({ children, pos, classs }) {
    return (
        <div
            className={"center-content-flex item " + classs}
            style={{
                gridColumnStart: pos[0],
                gridColumnEnd: pos[1],
                gridRowStart: pos[2],
                gridRowEnd: pos[3],
                padding: "10px",
            }}
        >
            <div
                className=""
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "15px",
                }}
            >
                {children}
            </div>
        </div>
    );
}

const Contact = () => {
    return (
        <div>
            <h4>Contact Info</h4>
            <ul>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            Adelaide, Australia
                        </span>
                    </div>
                </li>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#1DA1F2"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            <a href="https://twitter.com/AlexMcclay2000">
                                @AlexMcClay2000
                            </a>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            <a href="https://github.com/AlexMcClay">
                                github.com/AlexMcClay
                            </a>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            <a href="https://shorturl.at/imDGY">
                                shorturl.at/imDGY
                            </a>
                        </span>
                    </div>
                </li>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            Alex.Mcclay@gmail.com
                        </span>
                    </div>
                </li>
                <li>
                    <div className="center-content-vertical">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                        </svg>

                        <span
                            style={{
                                marginLeft: "30px",
                            }}
                        >
                            +61498801001
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

function Hr() {
    return (
        <div className="horizontal_line" style={{ marginRight: "10px" }}></div>
    );
}

function Squares({ n }) {
    var rows = [];
    for (var i = 0; i < n; i++) {
        rows.push(<Full key={i} />);
    }
    var x = 5 - n;
    for (var i = 0; i < x; i++) {
        rows.push(<Empty key={i} />);
    }
    return <div className="center-content-vertical">{rows}</div>;
}

function Full() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#646a83"
        >
            <path d="M24 0h-24v24h24v-24z" />
        </svg>
    );
}

function Empty() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#646a83"
        >
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" />
        </svg>
    );
}

export default App;
