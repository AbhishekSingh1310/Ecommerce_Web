import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Button } from "@mui/material";

const Seacrh = () => {
  return (
    <div className="headerSearch ">
        <input type="text" placeholder="Search for Products..."/>
        <Button className='search mx-2'><FaSearch className='icon' size={20}/></Button>
    </div>
  )
}

export default Seacrh