import React from 'react';
import classes from "./Footer.module.css";
import tel from '../../assets/images/phone-footer.png'
import email from '../../assets/images/email-footer.png'
import name from '../../assets/images/name-footer.png'
import reactLogo from '../../assets/images/reactjs-icon.svg'

const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerProject}>
                <div className={classes.logo}><img src={reactLogo} alt="reactLogo" /></div>
                <p>My first project</p>
            </div>

            <div className={classes.footerContact}>
                <div className={classes.tel}>
                    <div>
                        <img src={tel} alt="tel" />
                    </div>
                    <p>8-800-000-00-00</p>
                </div>
                <div className={classes.email}>
                    <div>
                        <img src={email} alt="email" />
                    </div>
                    <p>gmail@gmail.com</p>
                </div>
                <div className={classes.name}>
                    <div>
                        <img src={name} alt="name" />
                    </div>
                    <p>Vitaliy</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;