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

function Header(props) {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <Nav className={`${ isExpanded ? `absolute inset-0` : ``}`}>
            <div className={`${
                isExpanded ? `hidden` : `flex`
                } flex-wrap items-center justify-between mx-auto p-4`}
            >
                <div className="w-12">
                    <Link to="/" className="flex items-center no-underline ">
                        <img src={SukoonLogo} alt="Sukoon Logo"/>
                    </Link>
                </div>
                <div className="flex">
                    <button
                        className="block relative outline-none flex items-center py-2 px-4 mr-2 bg-sukoon text-white">
                        <span className="text-sm font-bold">Book Appointment</span>
                    </button>
                    <button
                        className="block relative outline-none flex items-center px-3 pb-2 rounded text-sukoon"
                        onClick={() => {toggleExpansion(!isExpanded);
                                                props.toggleMenu(!isExpanded);}}>
                        <span id="menu-hamburger-icon" className="text-sm font-bold">MENU</span>
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
                <MenuLinkWrapper className="flex flex-col justify-between">
                    <div className="text-lg ml-6 text-sukoon flex flex-col">
                        <Link
                            to="/"
                            className="mt-4 inline-block mt-0 mr-6 no-underline"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Services
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Infrastructure
                        </Link>
                        <Link
                            to="/"
                            className="inline-block mt-4 mt-0 mr-6 no-underline"
                        >
                            Amenities
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
                    <div className="ml-6">
                        <div className="mb-4">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-4">+91 9876543210</span>
                        </div>
                        <div className="mb-6">
                            <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
                            <span className="ml-4">+91 9876543210</span>
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
