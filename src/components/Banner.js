import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import BookBtn from "../elements/BookNowBtn";

// Images
import ArrowButton from "../elements/ArrowButton";
import Para from "../elements/Para";

const HeadingWrapper = styled.div`
  font-size: 12vw;
  line-height: 1.2;
`;

const Header = styled.section`
    ${props => props.backgroundImg ? `background-image: url(${props.backgroundImg});` : ''}
    background-position: top 0 left 0;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Heading = (props) => {
    return (
        <HeadingWrapper className="text-sukoon">
            <span className="font-gilroyLight block">
                {props.captionLight || "Don't Just Stay"}
            </span>
            <span className="font-gilroyBold block">
                {props.captionBold || "Live Here !"}
            </span>
        </HeadingWrapper>
    )
};

const ParaSection = (props) => {

    return(
        <div>
            <p className="text-para font-gilroyMedium py-1 text-left text-v6xl mb-8 block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                inventore ipsum!</p>
        </div>
    )
};

const BookNow = (props) =>{

    return(
        <div className="mb-10">
            <div id="contact-info-container" className="mt-4">
                <select name="appointment" id="appointment-type"
                        className="block py-2 bg-transparent border-b border-solid border-sukoon outline-none w-full font-medium"
                        value="">
                    <option value="" selected>Appointment Type</option>
                    <option value="">In House</option>
                    <option value="">Online Consulting</option>
                </select>
                <input type="text" placeholder="Email / Phone"
                       className="block bg-transparent border-b border-solid border-sukoon outline-none w-full pl-1 pb-1  pt-2 text-sukoon"/>
            </div>
            <div className="flex mt-6">
                    <BookBtn border bg="transparent" wrapperClass="">
                        Book Now
                    </BookBtn>
                {props.contact ?
                    <div className="my-auto mx-2">
                        <span className="font-gilroyRegular">or Call at +91 9876543210</span>
                    </div> : null}
            </div>
            { props.discover ?
                <div className="mt-12 flex">
                    <Link to="/" className="underline">Explore Appointments</Link>
                    <ArrowButton border={false} margin="0 12px"/>
                </div> : null}
        </div>
    )
};



const Banner = (props) => {
    return (
        <Header id="header-intro" bookNow={props.bookNow} backgroundImg={props.backgroundImg} className="w-full px-4">
            <div className="mt-8">
                <Heading captionLight={props.captionLight} captionBold={props.captionBold} />
            </div>
            {props.bookNow ?
            <BookNow  contact={props.contact} discover={props.discover}/> :
                <ParaSection />}
        </Header>
    )
};

export default Banner;