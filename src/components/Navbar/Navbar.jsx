import React, { useState } from 'react'
import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState("");


  
  const handleSearchInputChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);

    // Call the parent component's function to update the search term
    onSearchTermChange(newTerm);
  };


  return (
    <div className='navbar'>
        <div className="searchbar">
            <input type="text" placeholder="Search... " className='searchFilter' onChange={handleSearchInputChange} value={searchTerm}/>
            <div className="searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} /></div>
        </div>
    </div>
  )
}

export default Navbar