import React from 'react';
import { IoRainyOutline } from "react-icons/io5";
import './topbanner.css';

const TopBanner = () => {
  return (
    <section className='top-banner section'>
        <div className="top-strip bg-blue">
            <div>
                <p className="mb-1 mt-1 text-center">Due to Rainy Weather<IoRainyOutline className='mx-2' size={20}/> , Orders may be processed with a slight delayed.</p>
            </div>
        </div>
    </section>
  )
}

export default TopBanner