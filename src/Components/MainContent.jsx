import React from "react";
import Avatar from "./Avatar";
import ChatList from "./ChatList";

const MainContent = () => {
    return (

        <div className='content'>
            <div className='content-header'>
                <div className='search-container'>
                    <i data-feather='search' className='search-icon'>
                    </i>
                    <input className='search--input' type='text' placeholder='Search users, messages or chat id' />
                    <div className='search--filter'>
                        <i data-feather='filter' />
                    </div>
                </div>
                <div className='new-chat-container'>
                    <button className='new-chat'><i data-feather='plus' />Start a new chat</button>
                </div>
            </div>
            <div className='content-chat' >
                <div className='content-chat--inbox'>
                    <ChatList />
                </div>
                <div className='content-chat--single'>
                    <div className='chat-single--header'>
                        <div className='chat-single-header--avatar'>
                            <div className='p-relative'>
                                <Avatar cssClass='avatar-absolute' />
                            </div>
                            <span className='sender-text fw-700 fs-small sender-name mt-1'>Shirly Cook</span>
                            <span className='sender-text fs-small sender-email'>@JhontheD</span>
                        </div>
                        <h3 className='chat-single-title'>Inquiry about relocation in Nairobi</h3>
                        <button className='contact-info'> <i className='color-yellow' data-feather='info' /> Contact Info</button>
                        <i data-feather='more-vertical' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;