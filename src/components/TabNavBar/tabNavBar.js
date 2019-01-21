import React from 'react';
import { Link } from 'gatsby';


const TabNavBar = () => (
    
    <div className="box customTabBox">
        <div className="tabs is-medium">
            <ul>  
                <li className={window.location.pathname === '/gallery' ? "is-active customBorderTab customBorderPhoto" : "customBorderTab customBorderPhoto"}><Link to="/gallery">Photos</Link></li>
                {/* <li className={window.location.pathname === '/people' ? "is-active customBorderTab customBorderPeople" : "customBorderTab customBorderPeople"}><Link to="/people">People</Link></li> */}
                <li className={window.location.pathname === '/groups' ? "is-active customBorderTab customBorderGroups" : "customBorderTab customBorderGroups"}><Link to="/groups">Groups</Link></li>                
            </ul>
        </div>
    </div>
)

export default TabNavBar;