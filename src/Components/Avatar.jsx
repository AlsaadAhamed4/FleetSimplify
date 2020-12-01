import React from 'react';

const Avatar = ({ cssClass }) => {
    return (
        <>
            <img className={`avatar-img ${cssClass}`} src='/images/avatar.jpg' alt='avatar'></img>
        </>
    )
}

export default Avatar;