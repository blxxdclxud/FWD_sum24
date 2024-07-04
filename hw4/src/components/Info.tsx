import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPython,
    faUbuntu,
    faGolang,
    faHtml5,
    faCss3Alt,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import '../portfolio.css'
import Contacts from './Contacts'
import photo from './profile-pic.png'

const Info: React.FC = () => {
    return (
        <div>
            {/* Bio Section */}
            <section id="photo">
                <img className="profile-img" src={photo} alt="Ramazan Nazmiev"/>
                <div className="text-about">
                    <p>I&apos;m <span className="name">Ramazan Nazmiev</span>,<br/>
                        Golang backend developer</p>
                </div>
            </section>

            {/* About Me Section */}
            <section id="info">
                <h1>About me</h1>
                <ul>
                    <li>Age: 18</li>
                    <li>Course: Bachelor</li>
                    <li>Work field: web programming, backend on Python and Go</li>
                    <li>Education: Innopolis University, Innopolis, Tatarstan Republic</li>
                </ul>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <h1>Skills</h1>
                <div className="skills-container">
                    <table className="skills-table">
                        <tbody>
                        <tr>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faPython}/>
                                <p>Python</p>
                            </td>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faUbuntu}/>
                                <p>Ubuntu</p>
                            </td>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faGolang}/>
                                <p>Go</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faHtml5}/>
                                <p>HTML</p>
                            </td>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faCss3Alt}/>
                                <p>CSS</p>
                            </td>
                            <td className="skill-cell">
                                <FontAwesomeIcon icon={faGitAlt}/>
                                <p>Git</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    <ul className="projects-list">
                        <li className="project-item">
                            <h3>LI7 Accounting</h3>
                            <p>Software for school accounting, that automates the receipts sending process. It forms the
                                receipt for payment for the service and sends them to destination emails.</p>
                        </li>
                        <li className="project-item">
                            <h3>EGE bot</h3>
                            <p>Telegram bot that helps to prepare for EGE (Unified State Exam in Russia). It has
                                materials for several subjects such as math, Russian, etc.</p>
                        </li>
                        <li className="project-item">
                            <h3>Binance Parser</h3>
                            <p>Tool parses data from Binance and fills it into the Google Sheet table. Absolutely useful
                                tool for P2P.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <Contacts/>
        </div>
    );
};

export default Info;
