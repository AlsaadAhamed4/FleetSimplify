import React from 'react';
import Avatar from './Avatar';


const ChatList = () => {
    const chatData = [
        {
            name: 'Shirly Cook',
            email: '@JhontheD',
            id: '3362Gd2',
            title: 'Inquity about relova....',
            text: 'Vacancy ads helps you attract potential hired who are......',
            receivedAt: '11:00 a.m',
            count: 4
        },
        {
            name: 'Shirly Cook',
            email: '@JhontheD',
            id: '3362Gd2',
            title: 'Inquity about relova....',
            text: 'Vacancy ads helps you attract potential hired who are......',
            receivedAt: '11:00 a.m',
            count: 0
        },
        {
            name: 'Shirly Cook',
            email: '@JhontheD',
            id: '3362Gd2',
            title: 'Inquity about relova....',
            text: 'Vacancy ads helps you attract potential hired who are......',
            receivedAt: '11:00 a.m',
            count: 4
        },
        {
            name: 'Shirly Cook',
            email: '@JhontheD',
            id: '3362Gd2',
            title: 'Inquity about relova....',
            text: 'Vacancy ads helps you attract potential hired who are......',
            receivedAt: '11:00 a.m',
            count: 0
        }

    ]
    return (
        <>
            {
                chatData.map((data, index) => {
                    return (
                        <div className={`inbox-card ${data.count > 0 ? 'inbox-unread' : 'inbox-read'}`} key={index}>
                            <div className='chat-id fs-small'>Chat ID: {data.id}</div>
                            <div className='inbox-card--content'>
                                <div className='inbox-avatar--content'>
                                    <Avatar />
                                    <span className='sender-text fw-700 fs-small sender-name'>{data.name}</span>
                                    <span className='sender-text fs-small sender-email'>{data.email}</span>
                                </div>
                                <div className='inbox-body--content'>
                                    <h4 className='inbox-body--title'>{data.title}</h4>
                                    <p className='inbox-body--text'>{data.text}</p>
                                </div>
                            </div>
                            <span className='chat-receivedAt fw-700 fs-small'>{data.receivedAt}</span>
                            {
                                data.count > 0 ? (
                                    <span className='count'>{data.count}</span>
                                )
                                    :
                                    (
                                        null
                                    )

                            }

                        </div>
                    )
                })
            }
        </>
    )
}
export default ChatList