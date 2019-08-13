import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import Call from "../images/icons/phone.svg";


// Components
import BookBtn from "../elements/BookNowBtn";

const MenuLinkWrapper = styled.div`
  height: 88%;
`;

const Nav = styled.nav`
  width: 100%;
  transition: all 200ms ease-in-out;
  background: #C2DCD3;
  min-height: 50px;
`;

const Menu = styled.span`
    
  &::before{
    top: 18px;
    left:12px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 32px;
    height: 1px;
  }
  
  &::after{
    left: 12px;
    top: 22px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 32px;
    height: 1px;
  }
`;

function Header(props) {
    const [isExpanded, toggleExpansion] = useState(false);

    // Makes nav bar sticky after user scrolls past banner section.
    const handleScroll = () =>{

        let Header = document.getElementById('header-intro');
        let StickyMenu = document.getElementById('nav-bar');
        let Booking = document.getElementById('nav-booking-button');
        let offset =  Math.abs(Number(Header.getBoundingClientRect().top));

        if(offset > 786 || offset > 666 || offset > 556){
            Booking.classList.add('show');
            Booking.classList.remove('hide');
            StickyMenu.classList.add('sticky');
            StickyMenu.classList.remove('static');
        }
        else{
            Booking.classList.add('hide');
            Booking.classList.remove('show');
            StickyMenu.classList.remove('sticky');
            StickyMenu.classList.add('static');
        }

    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    return (
        <Nav id="nav-bar" className="">
            <div className={`${
                isExpanded ? `hidden` : `flex`
                } flex-wrap items-center justify-between mx-auto p-2 pt-6`}
            >
                <div className="w-8">
                    <Link to="/" className="flex items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                    </Link>
                </div>
                <div className="flex">
                    <BookBtn theme="green" id="nav-booking-button" wrapperClass="hide" full>
                        Book Appointment
                    </BookBtn>
                    <button
                        className="block relative outline-none flex items-center px-3 pb-2 rounded text-sukoon"
                        onClick={() => {toggleExpansion(!isExpanded);
                                                props.toggleMenu(!isExpanded);}}>
                        <Menu id="menu-hamburger-icon" className="text-xs font-bold">MENU</Menu>
                    </button>
                </div>
            </div>
            <div
                className={`${
                    isExpanded ? `block` : `hidden`
                    } items-center justify-between w-full h-screen bg-menuBg`}
            >
                <div className="flex justify-between p-4">
                    <div className="w-12">
                        <Link to="/" className="flex items-center no-underline ">
                            <img src={SukoonLogo} alt="Sukoon Logo"/>
                        </Link>
                    </div>
                    <button onClick={() => { toggleExpansion(!isExpanded); props.toggleMenu(!isExpanded);}} className="text-sukoon outline-none mr-4 text-3xl">X</button>
                </div>
                <MenuLinkWrapper className="flex flex-col">
                    <div className="text-lg ml-6 text-sukoon flex flex-col">
                        <Link
                            to="/services"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Services
                        </Link>

                        <Link
                            to="/infrastructure"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Infrastructure
                        </Link>
                        <Link
                            to="/experience"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Experience
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Doctors
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            International Patients
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            FAQS
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Blogs
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-around">
                        <div className="">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-2">+91 9876543210</span>
                        </div>
                        <div className="">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-2">+91 9876543210</span>
                        </div>
                    </div>
                </MenuLinkWrapper>
            </div>
        </Nav>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
