import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css';

const Dialog = (props) => {
    return(
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} className={style.link} to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;