import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div>
                <p>My first project</p>
            </div>
            <div>
                <div className={classes.tel}>
                    <div>

                    </div>
                    <p>8-800-000-00-00</p>
                </div>
                <div className={classes.email}>
                    <p>gmail@gmail.com</p>
                </div>
                <div className={classes.name}>
                    <p>Vitaliy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;