import React from 'react'
import './header.css';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5"; 

const CountryDropDown = () => {
  return (
    <section className="country mx-5">
        <Button className="countryDrop">
            <div className="info d-flex flex-column">
                <span className="label"><IoLocationOutline size={20} /> Location</span>
                <span className="country-name">India</span>
            </div>
            <span className='down-arrow ms-auto'><FaAngleDown size={20}/></span>
        </Button>
    </section>
  )
}

export default CountryDropDown