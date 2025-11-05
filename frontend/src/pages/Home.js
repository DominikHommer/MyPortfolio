import React from 'react';
import Section from '../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, faLanguage, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { SiPython, SiC, SiCplusplus, SiScikitlearn, SiPytorch, SiJupyter, SiPostgresql, SiLinkedin, SiGithub } from 'react-icons/si';
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineHub } from 'react-icons/md';

const Home = () => {
    
    return (
        <div>
            <Section id="about" title="About me">
                <div data-aos="fade-left">
                    <p>My name is Dominik Hommer. I’m a student of Artificial Intelligence and Data Science, deeply
                        passionate about solving complex challenges.</p>

                    <p>My interests span Deep Learning, Machine Learning methods, Computer Vision, and I also have a
                        strong foundation in Mathematics and Statistics, which I regularly apply to my AI work. While
                        I’m focused on AI, I equally enjoy programming outside of this field, constantly building and
                        exploring new software solutions.</p>

                    <p>I’m always eager to collaborate, learn, and contribute to innovative projects. If you’re working
                        on something exciting—whether in AI or general software development—let’s connect!</p>

                </div>
            </Section>

            <Section id="skills" title="Skills" reverse>
                <div >
                    <div className="skills-list">
                        <div className="skill-item" data-aos="fade-right">
                            <SiPython className="skill-icon"/>
                            <span>Python</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiC className="skill-icon"/>
                            <span>C-Programming</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiCplusplus className="skill-icon"/>
                            <span>C++</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiJupyter className="skill-icon"/>
                            <span>Jupyter</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiScikitlearn className="skill-icon"/>
                            <span>scikit-learn</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiPytorch className="skill-icon"/>
                            <span>PyTorch</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <MdOutlineHub className="skill-icon"/>
                            <span>Machine Learning</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <AiOutlineEye className="skill-icon"/>
                            <span>Computer Vision</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            < FontAwesomeIcon icon={faChartLine} className="skill-icon"/>
                            <span>Statistics</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            <SiPostgresql className="skill-icon"/>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            < FontAwesomeIcon icon={faLaptopCode} className="skill-icon"/>
                            <span>WebDev</span>
                        </div>
                        <div className="skill-item" data-aos="fade-right">
                            < FontAwesomeIcon icon={faLanguage} className="skill-icon"/>
                            <span>English, German</span>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="research" title="Research" reverse>
            <div className="timeline research-timeline">
                {/* Bachelor Thesis (passt thematisch dazu) */}
                <div className="timeline-item" data-aos="fade-left">
                <div className="timeline-content">
                    <h3>Bachelor Thesis</h3>
                    <span>OTH Regensburg, 10/2025 – present</span>
                    <p>Table Structure Recognition using Vision Transformer Autoencoder (ViTAE) with a custom-designed loss function for structural consistency.</p>
                </div>
                </div>

                {/* Poster (Erfurt) */}
                <div className="timeline-item" data-aos="fade-right">
                <div className="timeline-content">
                    <h3>Poster Presentation – DOG Conference</h3>
                    <span>German Ornithologists’ Society (DOG), Erfurt — 09/2025</span>
                    <p>Presented a research poster on <i>“Artificial Intelligence and Ornithology”</i>, demonstrating the application of deep learning models in digitizing historical ornithological records.</p>
                </div>
                </div>

                {/* Research Student / Position */}
                <div className="timeline-item" data-aos="fade-left">
                <div className="timeline-content">
                    <h3>Research Student</h3>
                    <span>OTH Regensburg, 10/2024 – present</span>
                    <p>Research in document digitization, deep learning, and computer vision within academic projects and thesis work. Developing a deep learning system to extract data from handwritten tables. Digitizing Swiss ornithological records for research and conservation. Improving data accessibility through advanced ML models.</p>
                </div>
                </div>

            </div>
            </Section>


            <Section id="workexp" title="Work Experience">
                <div className="timeline">
                    <div className="timeline-item" data-aos="fade-left">
                        <div className="timeline-content">
                            <h3>Tutor CodeClinic</h3>
                            <span>OTH Regensburg, 10/2025 - present</span>
                            <p></p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-right">
                        <div className="timeline-content">
                            <h3>Working Student Data Science/Backend</h3>
                            <span>Trinnovative GmbH, 04/2025 - present</span>
                            <p></p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-right">
                        <div className="timeline-content">
                            <h3>Intern</h3>
                            <span>Audi AG, 10/2024 - 03/2025</span>
                            <p>Used data mining algorithms to analyze error sequence frequencies. Created an unsupervised model for driving style recognition using autoencoders, time series methods, and clustering.Built LLM-based assistants to streamline processes, integrating external documents as a knowledge base.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-left">
                        <div className="timeline-content">
                            <h3>Working student development in the field of AI</h3>
                            <span>AVL Software and Functions GmbH, 05/2024 - 08/2024</span>
                            <p>As part of AVL’s AI team, I developed an autocompletion feature using both <br/> traditional
                                methods and Large Language Models (LLMs). I handled full-stack development, working
                                independently on <br/> both frontend and backend to create an efficient web application.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-right">
                        <div className="timeline-content">
                            <h3>Operator for automation and productionline</h3>
                            <span>Siemens AG, 08/2021 - 09/2021</span>
                            <p>I operated and monitored automated production lines, ensuring smooth workflows and
                                resolving technical issues to optimize production efficiency.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-left">
                        <div className="timeline-content">
                            <h3>Mechatronics Apprentice</h3>
                            <span>Siemens AG, 09/2018 - 07/2021</span>
                            <p>I gained hands-on experience in mechatronics, working on the installation, maintenance,
                                and troubleshooting of mechanical and electronic systems.</p>
                        </div>
                    </div>
                </div>
            </Section>

            
            <Section id="education" title="Education" reverse>
                <div className="timeline education-timeline">
                    <div className="timeline-item" data-aos="fade-right">
                        <div className="timeline-content">
                            <h3>Artificial Intelligence and Data Science B.Sc.</h3>
                            <span>University of Applied Science Regensburg, 10/2022 - present</span>
                            <p>Focus on artificial intelligence, <br/> programming, machine learning, data analytics, mathematics, statistics, and their application in real-world scenarios.</p>
                        </div>
                    </div>

                    <div className="timeline-item" data-aos="fade-left">
                        <div className="timeline-content">
                            <h3>Upper Secondary Vocational School (Abitur)</h3>
                            <span>Amberg/Germany, 10/2021 - 07/2022</span>
                            <p>Completed the University Entrance Qualification with a focus on mathematics and science.</p>
                        </div>
                    </div>

                    <div className="timeline-item" data-aos="fade-right">
                        <div className="timeline-content">
                            <h3>Vocational School</h3>
                            <span>Amberg/Germany, 10/2018 - 07/2021</span>
                            <p>Training and education focused on mechatronics.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="projects" title="Projects">
            <div className="projects-container">

                {/* Bird Data Extraction Project */}
                <div className="project-card" data-aos="fade-left">
                <h3>Research Project: Bird Data Extraction from Handwritten Tables</h3>
                <span>09/2024 - Present</span>
                <ul>
                    <li>Developing a deep learning pipeline to extract structured bird observation data from handwritten ornithological tables.</li>
                    <li>Digitizing Swiss ornithological records to support research and conservation efforts.</li>
                    <li>Combining computer vision and NLP techniques for accurate table interpretation and data validation.</li>
                </ul>
                </div>

                {/* Schula Project */}
                <div className="project-card" data-aos="fade-left">
                <h3>Schula – AI Feedback for Student Essays</h3>
                <span></span>
                <ul>
                    <li>Developed an educational application that uses LLMs to compare student essays with expected learning goals.</li>
                    <li>Provides automated formative feedback to help students reflect and improve their writing independently.</li>
                    <li>Combines text recognition with semantic analysis to identify partially fulfilled criteria.</li>
                </ul>
                </div>

                {/* Machine Learning Mini Projects */}
                <div className="project-card" data-aos="fade-left">
                <h3>Machine Learning Mini Projects</h3>
                <ul>
                    <li>Spam Detection using Support Vector Machines (SVM)</li>
                    <li>Heart Failure Prediction using KNN</li>
                    <li>Image Classification with Convolutional Neural Networks (CNN)</li>
                </ul>
                </div>

                {/* Weather App */}
                <div className="project-card" data-aos="fade-left">
                <h3>Weather App</h3>
                <p>A web application that provides real-time weather updates for cities around the world, built
                    using Node.js, JavaScript, and Handlebars.</p>
                <ul>
                    <li>Backend developed with Node.js and Express using JavaScript</li>
                    <li>Frontend rendered using Handlebars templating engine</li>
                    <li>API integration with OpenWeatherMap for live weather data</li>
                </ul>
                </div>

            </div>
            </Section>

            {/*
            <Section id="tictactoe" title="TicTacToe" reverse>
                <div className="game">
                    <div className={`status ${isWinner ? 'winner-status' : ''}`}>{status}</div>

                    <div className="board">
                    {board.map((value, index) => (
                        <button
                        className="square"
                        key={index}
                        onClick={() => handleClick(index)}
                        >
                        <span className={winningLine.includes(index) ? 'winner' : ''}>
                            {value}
                        </span>
                        </button>
                    ))}
                    </div>

                    <div className="difficulty-select">
                    <label htmlFor="difficulty">Choose Difficulty: </label>
                    <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="middle">Middle</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button className="reset-button" onClick={resetGame}>
                        <FaSyncAlt /> 
                        </button>
                    </div>
                </div>
            </Section>
            */}
            <Section id="contact" title="Contact" reverse>
                <div>
                    <div className="contact-list">
                        <div className="contact-item" data-aos="fade-right">
                            <a href="https://www.linkedin.com/in/dominikhommer" target="_blank" rel="noopener noreferrer">
                                <SiLinkedin className="contact-icon" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div className="contact-item" data-aos="fade-right">
                            <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer">
                                <SiGithub className="contact-icon" />
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div className="contact-item" data-aos="fade-right">
                            <a href="mailto:dominik.hommer@web.de">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>




        </div>
    );
};

export default Home;




