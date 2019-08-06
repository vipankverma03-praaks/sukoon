import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png"
import Call from "../images/icons/phone.svg";
import styled from "styled-components";

const MenuLinkWrapper = styled.div`
  height: 88%;
`;

const Nav = styled.nav`
  z-index: 1001;
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

    return (
        <Nav className={`${ isExpanded ? `` : ``}`}>
            <div className={`${
                isExpanded ? `hidden` : `flex`
                } flex-wrap items-center justify-between mx-auto p-2`}
            >
                <div className="w-8">
                    <Link to="/" className="flex items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                    </Link>
                </div>
                <div className="flex">
                    <button
                        className="block text-xs font-gilroyMedium relative outline-none flex items-center py-1 px-2 mr-2 bg-sukoon text-white">
                        Book Appointment
                    </button>
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
