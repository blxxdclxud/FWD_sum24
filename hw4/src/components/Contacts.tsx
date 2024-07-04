import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../portfolio.css'

const Contacts: React.FC = () => {
    return (
            <section id="contacts">
                <h1>Contact Me</h1>
                <div className="contacts-container">
                    <ul className="links-container">
                        <li>
                            <a href="https://github.com/blxxdclxud" id="gh-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/ssstaticmethod" id="tg-link">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                        </li>
                    </ul>
                    <ul className="email-container">
                        <li>
                            <a href="mailto:ramazanatzuf10@gmail.com" id="email">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>ramazanatzuf10@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
    )
}

export default Contacts;