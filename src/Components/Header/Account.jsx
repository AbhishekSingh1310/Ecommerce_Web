import {React , useState} from 'react'
import './header.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";
import Details from '../User/Details';

const Account = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    }
  return (
    <>
    <div className="part-3 d-flex align-items-center col-sm-2 mx-5">
    <Button onClick={toggleVisibility} className="circle login mx-3">{isVisible ? '' : ''}<FaRegUser size={20} /></Button>
        <div className="cartTab d-flex align-items-center">
            <span className="price mx-3">₹ 0.00</span>
            <div className="position-relative">
                <Button className="circle mx-1"><FaShoppingCart size={20} /></Button>
                <span className="count d-flex align-items-center justify-content-center">0</span>
            </div>
        </div>
    </div>
    {isVisible && <Details />}
    </>
  )
}

export default Account