import React from "react";
import HeaderButton from "./HeaderButtons";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-image'>
                <img src='/images/logo.png' alt='logo' />
            </div>
            <div className='header-contents'>
                <HeaderButton text='Jobs' theme={'header-button--light-theme'} />
                <HeaderButton text='Get Social' theme={'header-button--light-theme'} />
                <HeaderButton text='James Reem' theme={'header-button--dark-theme'} />
            </div>
            <div className='header-menu'>
                <span className='header-menu--title'>Menu</span>
                <i className='header-menu--icon' data-feather='menu' />
            </div>
        </div>
    );
}

export default Header;