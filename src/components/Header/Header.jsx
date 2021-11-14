import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/813/735/png-transparent-bird-of-prey-logo-beak-desktop-bird-animals-computer-logo.png"
                alt="" />
            <div className={s.loginBlock}>

                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}


export default Header