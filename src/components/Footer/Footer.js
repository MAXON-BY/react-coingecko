import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div className={'container footer-flex'}>
            <p>
                &copy; 2020 Creted by
                <a href={'https://jobs.tut.by/resume/d311210eff028da1ec0039ed1f63496a624537'} target="_blank" rel="noopener noreferrer">
                    Max Nyrkov
                </a>
            </p>
        </div>
    );
};

export default Footer;