import React from 'react';
import MainContent from './MainContent';

const Asidebar = () => {
    const asidebarList = [
        {
            icon: 'truck',
            text: 'Onboard your Vehicles'
        },
        {
            icon: 'search',
            text: 'Search & Hire Drivers'
        },
        {
            icon: 'mail',
            text: 'Inbox'
        },
        {
            icon: 'briefcase',
            text: 'Recruitment'
        },
        {
            icon: 'server',
            text: 'My Organisations'
        },
        {
            icon: 'star',
            text: 'Rate A Drivers'
        },
        {
            icon: 'credit-card',
            text: 'My Subscriptions'
        }
    ]
    return (
        <div className='main-body'>
            <div className='asidebar'>
                <div className='asidebar--employee-profile'>
                    <i className='asidebar--employee-profile--icon' data-feather='user' />
                    <span className='asidebar--employee-profile--text'>Employer Profile</span>
                    <i className='asidebar--employee-profile--downicon' data-feather='chevron-down' />
                </div>
                {
                    asidebarList.map(({ icon, text }) => {
                        return (
                            <div className={`asidebar-list ${icon === 'mail' ? 'asidebar-list--active' : ''}`} key={text} >
                                <i className='asidebar--employee-profile--icon' data-feather={icon} />
                                <span className='asidebar--employee-profile--text'>{text}</span>
                                {
                                    icon === 'mail' ?
                                        <span className='active-icon'></span>
                                        :
                                        ''
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='main-content'>
                <MainContent />
            </div>
        </div>
    )
}

export default Asidebar