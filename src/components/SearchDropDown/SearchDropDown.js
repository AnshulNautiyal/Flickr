import React from 'react';
import { Link } from 'gatsby';

const SearchDropDown = () => (
    <>
        <div className="box customSearchDropDown customPhotos">
            <Link to="/gallery">
                <div className="content">
                    <span className="icon is-small is-left customSearchIcon">
                        <i className="fas fa-images"></i>
                    </span>
                    Search photos
                
                </div>  
            </Link> 
        </div>
        {/* <div className="box customSearchDropDown customPeople">
            <div className="content">
                <Link to="/overview/">
                    <span className="icon is-small is-left customSearchIcon">
                        <i className="fas fa-users"></i>
                    </span>
                    Search people
                </Link> 
            </div>  
        </div> */}
        <div className="box customSearchDropDown customGroups">
            <Link to="/groups">
                <div className="content">
                    <span className="icon is-small is-left customSearchIcon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    Search groups
                </div>   
            </Link> 
        </div>
    </>
)

export default SearchDropDown;