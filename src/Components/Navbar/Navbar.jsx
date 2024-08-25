import {React , useState} from 'react';
import './navbar.css';
import { FaHome, FaBookOpen  } from "react-icons/fa";
import InfoIcon from '@mui/icons-material/Info';
import { MdContacts } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import Home from '../Home/Home';
import Products from '../Products/Products';
import About from '../About/About';
import Certification from '../Certifications/Certification';
import Contact from '../Contact/Contact';
import Catalogue from '../Catalogue/Catalogue';
import Details from '../User/Details';

function Component1() {
  return <Home/>;
}

function Component2() {
  return <About/>;
}

function Component3() {
  return <Products/>;
}

function Component4() {
  return <Certification/>;
}

function Component5() {
  return <Catalogue/>;
}

function Component6() {
  return <Contact/>;
}

const Navbar = () => {

  const [activeComponent, setActiveComponent] = useState(1);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveComponent(index);
  }


    const renderComponent = () => {
      switch (activeComponent) {
        case 1:
          return <Component1 />;
        case 2:
          return <Component2 />;
        case 3:
          return <Component3 />;
        case 4:
          return <Component4 />;
        case 5:
          return <Component5 />;
        case 6:
          return <Component6 />;            
        default:
          return <Component1 />;
      }
    };

  return (
    <nav>
        <div className="navbar my-3">
            <div className="navPart-1 d-flex">
                <ul className="list list-inline">
                    <li className="list-inline-item" onClick={() => toggleTab(1)} ><a href="#"><FaHome className={ toggleState === 1 ? "wave" : ""} size={20}/>Home</a></li>
                    <li className="list-inline-item" onClick={() => toggleTab(2)} ><a href="#"><InfoIcon className={ toggleState === 2 ? "wave" : ""} />About</a></li>
                    <li className="list-inline-item" onClick={() => toggleTab(3)} ><a href="#"><AiFillProduct className={ toggleState === 3 ? "wave" : ""}  size={20} />Products</a></li>
                    <li className="list-inline-item" onClick={() => toggleTab(4)} ><a href="#"><PiCertificateFill className={ toggleState === 4 ? "wave" : ""}  size={20} />Certfications</a></li>
                    <li className="list-inline-item" onClick={() => toggleTab(5)} ><a href="#"><FaBookOpen className={ toggleState === 5 ? "wave" : ""} size={20}/>Catalogue</a></li>
                    <li className="list-inline-item" onClick={() => toggleTab(6)} ><a href="#"><MdContacts className={ toggleState === 6 ? "wave" : ""}  size={20}/>Contact</a></li>
                </ul>
            </div>
        </div>
        <section className="nav-container">
        {renderComponent()}
        </section>
    </nav>
  )
}

export default Navbar