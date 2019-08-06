import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import BookBtn from "../elements/BookNowBtn";

// Images
import ArrowButton from "../elements/ArrowButton";
import Para from "../elements/Para";

const HeadingWrapper = styled.div`
  font-size: 12vw;
  line-height: 1.3;
`;

const Header = styled.section`
    ${props => props.backgroundImg ? `background-image: url(${props.backgroundImg});` : ''}
    background-position: top 0 left 0;
    background-size: 160vw;
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
            <Para width="100%" padding="5px 15px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                inventore ipsum!</Para>
        </div>
    )
};

const BookNow = (props) =>{

    return(
        <div>
            <div id="contact-info-container" className="pl-4 my-2">
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
            <div className="ml-4 py-4 sm:m-4 book-now-container flex">
                <div className="book-now-inner-container p-1">
                    <BookBtn>
                        Book Now
                    </BookBtn>
                </div>
                {props.contact ?
                    <div className="my-auto mx-2">
                        <span className="font-gilroyRegular font-bold">or Call at +91 9876543210</span>
                    </div> : null}
            </div>
            { props.discover ?
                <div className="p-4 flex">
                    <Link to="/" className="underline">Discover Process</Link>
                    <ArrowButton border={false} margin="0 12px"/>
                </div> : null}
        </div>
    )
};



const Banner = (props) => {
    return (
        <Header bookNow={props.bookNow} backgroundImg={props.backgroundImg} className="w-full">
            <div className="ml-4 my-2">
                <Heading captionLight={props.captionLight} captionBold={props.captionBold} />
            </div>
            {props.bookNow ?
            <BookNow  contact={props.contact} discover={props.discover}/> :
                <ParaSection />}
        </Header>
    )
};

export default Banner;