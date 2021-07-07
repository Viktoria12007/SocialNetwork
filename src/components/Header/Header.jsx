import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (<header className={style.header}>
        <a className={style.link} href="#">
            <img className={style.logo} src='https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-camelia-logo-light?fmt=png-alpha' />
        </a>
    </header>);
}

export default Header;