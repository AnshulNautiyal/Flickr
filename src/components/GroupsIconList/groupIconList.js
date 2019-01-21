import React from 'react';

const GroupIconList = (props) => (
    <footer className="card-footer customFooterIcon">
        <div className="hero">
            <span className="icon">
                <i className="fas fa-users"></i>
            </span>
            <p className="">{props.member}</p>
        </div>
        <div className="hero">
            <span className="icon">
                <i className="fas fa-images"></i>
            </span>
            <p className="">{props.photo}</p>
        </div>
        <div className="hero">
            <span className="icon">
                <i className="fas fa-comments"></i>
            </span>
            <p className="">{props.chat}</p>
        </div>
    </footer>
)
export default GroupIconList;