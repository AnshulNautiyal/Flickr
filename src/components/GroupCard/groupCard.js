import React from 'react';
import GroupIconList from './../GroupsIconList/groupIconList';


const GroupCard = (props) => (

        
            <div className="card">
                {
                
                window.location.pathname === "/gallery" && 
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                }
                <div className="card-content customGroupCard">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48 customCardImage">
                                <img src="https://api.adorable.io/avatars/232/abott@adorable.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content customUserName">
                            <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">Since 2016</p>
                        </div>
                       
                        <a className="button is-info">
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                            <span><strong>Join</strong></span>
                        </a>
                        
                    </div>
                    
                    <GroupIconList 
                        chat={props.chat}
                        member={props.member}
                        photo={props.photo}
                    />
                        
                </div>
            </div>
    
)

export default GroupCard;