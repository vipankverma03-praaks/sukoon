import React, {useState} from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql, Link} from "gatsby";

import styled from "styled-components";
import Para from "../elements/Para";
import HelpIcon from "../images/helpline/helpline copy 2@2x.jpg"
import CallIcon from "../images/icons/phone.svg";
import MailIcon from "../images/icons/mail.svg";

import Header from "./header";

const Heading = () => {
    return (
        <div className="text-sukoon text-5xl">
            <span className="font-light block">
                Don't Just Stay,
            </span>
            <span className="font-extrabold block">
                Live Here !
            </span>
        </div>
    )
};


const HeaderIntro = () => {
    return (
        <section className="w-full">
            <div className="p-4">
                <Heading/>
            </div>
            <div id="contact-info-container" className="p-6">
                <select name="appointment" id="appointment-type"
                        className="block p-2 bg-transparent outline-none appointment-type mb-2 w-full font-medium"
                        value="">
                    <option value="" selected>Appointment Type</option>
                    <option value="">In House</option>
                    <option value="">Online Consulting</option>
                </select>
                <input type="text" placeholder="Email / Phone"
                       className="block bg-transparent outline-none customer-contact-info w-full p-2 text-sukoon"/>
            </div>
            <div className="p-6 book-now-container flex">
                <div className="book-now-inner-container p-1">
                    <button
                        className="block md:hidden relative outline-none  items-center py-2 px-4 bg-sukoon text-white">
                        <span className="text-sm font-normal">Book Now</span>
                    </button>
                </div>
            </div>
        </section>
    )
};

const QuickLinks = (props) =>{

    return(
        <div className="flex justify-between p-6">
            <div>
                <span className="text-sukoon text-2xl font-semibold block">Sukoon</span>
                <ul className="mt-2">
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Sitemap</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Our Story</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Privacy Policy</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Terms & Conditions</Link></li>
                    <li className="text-gray-600 text-lg list-none"><Link to="/">Careers</Link></li>
                </ul>
            </div>
            <div>
                <span className="text-sukoon text-2xl font-semibold block">Quick Links</span>
                <ul className="mt-2">
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">About Us</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Services</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Infrastructure</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Amenities</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Doctors</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">International Patients</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">FAQs</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Blogs</Link></li>
                    <li className="text-gray-600 text-lg list-none">
                        <Link to="/">Contacts</Link></li>
                </ul>
            </div>
        </div>
    )
}

const Subscribe = (props) =>{
    return(
        <div className="p-6">
            <div>
                <span className="text-sukoon font-bold">Subscribe</span>
                <span className="ml-2 font-bold text-sukoonYellow">Our Newsletter</span>
            </div>
            <div className="mt-4 flex justify-between">
                <input type="text" placeholder="Enter Your Email Address" className="outline-none bg-transparent"/>
                <button className="text-sukoon text-lg">Click Me</button>
            </div>
        </div>
    )
}

const ReachUs = (props) =>{
    return(
        <div className="p-6">
            <span className="text-sukoon text-4xl font-semibold">Reach Us</span>
            <Para className="text-gray-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </Para>
            <div className="my-2 flex flex-wrap">
                <div className="text-sukoon mr-2 my-2 flex px-1">
                    <div className="fit"><img src={HelpIcon} className="w-6" alt="Help Icon"/></div>
                    <span className="ml-4">1800 123 6789</span>
                </div>
                <div className="text-sukoon mr-2 my-2 flex px-1">
                    <div className="fit"><img src={CallIcon} className="w-6" alt="Help Icon"/></div>
                    <span className="ml-4">1800 123 6789</span>
                </div>
                <div className="text-sukoon mr-2 my-2 flex px-1">
                    <div className="fit"><img src={MailIcon} className="w-6" alt="Help Icon"/></div>
                    <span className="ml-4">1800 123 6789</span>
                </div>
            </div>
        </div>
    )
};

const FollowUs = (props) =>{
    const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin-right: 1.5rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
    return(
        <div className="p-6">
            <h2 className="text-sukoon text-xl mb-2">Follow us on :-</h2>
            <div className="text-sm mr-2 flex justify-between break-words">
                <a href="/" className="mr-2 text-blue-800 cursor-pointer">Facebook</a>
                <a href="/" className="mr-2 text-blue-400 cursor-pointer">Twitter</a>
                <Instagram href="/">Instagram</Instagram>
                <a href="/" className="mr-2 text-blue-600 cursor-pointer">Skype</a>
            </div>
        </div>
    )
};

const CopyRight = (props) =>{
    return(
        <div className="py-2 px-6 bg-sukoon text-center break-words">
            <span className="text-white text-xs">Copyright © 2019 - All Rights Reserved - Design By Praaks</span>
        </div>
    )
};


function Layout({ children }) {

    const [isExpanded, toggleMenu] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={`${
            isExpanded ? `menu-open` : `flex `
            } flex-col min-h-screen text-gray-900`}
        >
          <Header toggleMenu={toggleMenu} siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto md:p-8 w-full">
            {children}
          </main>

          <footer className="">
            <HeaderIntro/>
            <Subscribe/>
            <QuickLinks/>
            <ReachUs/>
            <FollowUs/>
            <CopyRight/>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
