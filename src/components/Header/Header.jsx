import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <p>LOGO</p>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div className={s.unLoginBlock}><span>{props.login}</span>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Sign in</NavLink>
                }
            </div>
        </header>
    )
}


export default Header