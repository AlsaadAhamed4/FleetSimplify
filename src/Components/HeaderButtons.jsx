import React from 'react';

const HeaderButton = ({ text, theme }) => {
    return (
        <button className={`header-button ${theme}`}>{text}</button>
    )
}

export default HeaderButton