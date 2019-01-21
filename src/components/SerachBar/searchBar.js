import React from 'react';

import NavClass from './../Navigation/Navigation.module.css';

import SearchDropDown from './../SearchDropDown/SearchDropDown';

class SearchBar extends React.Component {

    constructor(){
        super();
        this.state = {
            search:'',
            width:400
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleClick(event){
        if(window.location.pathname === '/groups'){
            event.target.className += " customSearchWidthInc"
        }
    }
    handleBlur(event){
        if (window.location.pathname === '/groups') {
            event.target.classList.remove('customSearchWidthInc');
        }
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    render(){
        return (
            <div className={NavClass.customSearchBar + " navbar-start"}>

                <p className="navbar-item control is-expanded has-icons-left">
                    <input  
                            
                        className="input"
                        type="text"
                        placeholder="photos, people or groups"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                    />
                    <span className={NavClass.customIconPlaceInput + " icon is-left"}>
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    {
                        this.state.search && <SearchDropDown />
                    }
                    
                </p>
            </div>
        )
    }
}

export default SearchBar;