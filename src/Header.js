import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
            <div id="name"> 
            <p id="d1">web arz</p>
            <div>
            <bottonIcon>
                <MenuIcon />
            </bottonIcon>
            </div>
            </div>
            <div>
                <p id="update">Last Update</p>
                <p id="Date">Mon, May27, 2020 </p>
            </div>
        </div>
    )
}

export default Header
