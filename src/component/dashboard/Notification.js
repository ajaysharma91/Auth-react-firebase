import React from 'react';
import {moment} from 'moment';
const Notification =(props) => {
    const {notification} = props;
    console.log(notification +"not");
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"></span>
                    <ul className="notifications">
                        {notification && notification.map(not =>{
                            return (
                                <li key={not.id}>
                                    <span className="pink-text">{not.user}</span>
                                    <span>{not.content}</span>
                                    <div className="grey-text note-date">
                                        {not.time.toDate().toString()}
                                    {/* {moment(not.time.toDate().toString).fromNow()} */}
                                    </div>
                                </li>
                            )
                        })}
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;