import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavMenu.module.css';

const NavMenu = () => {
    return (<nav className={style.menu}>
        <ul>
            <li className={style.item}>
                <NavLink activeClassName={style.active} className={style.link} to="/profile">Profile</NavLink>
            </li>
            <li className={style.item}>
                <NavLink activeClassName={style.active} className={style.link} to="/messages">Messages</NavLink>
            </li>
            <li className={style.item}>
                <NavLink activeClassName={style.active} className={style.link} to="/news">News</NavLink>
            </li>
            <li className={style.item}>
                <NavLink activeClassName={style.active} className={style.link} to="/music">Music</NavLink>
            </li>
            <li className={style.item}>
                <NavLink activeClassName={style.active} className={style.link} to="/settings">Settings</NavLink>
            </li>
        </ul>
    </nav>);
}

export default NavMenu;