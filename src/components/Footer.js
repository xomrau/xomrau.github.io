import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

const Footer = () => {
    return (<footer className="footer">
        <div className="container">
            <p>Want to chat?<br />Feel free to email me <span className="link"><a href="mailto: hle3524@gmail.com">here</a></span></p>
            <p>You can check my socials, too.</p>
            <ul className="social">
                <li className="social-item"><a href="https://www.linkedin.com/in/daniel-l-14b652164/" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="inherit" /></a></li>
                <li className="social-item"><a href="https://github.com/xomrau" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="inherit" /></a></li>
            </ul>
        </div>
        <p className="copyright">Copyright &#169; 2020 Danny L.</p>
    </footer>);
}

export default Footer;